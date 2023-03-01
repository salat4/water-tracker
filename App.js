import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState} from 'react';
import Main from "./pages/Main"
import History from "./pages/History"
import * as SQLite from "expo-sqlite";

export default function App() {
  const [activePage,setActivePage] = useState("main");
  const [water, setWater] = useState(0);
  const [value,setValue] = useState();
  const [keyboardStatus,setKeyboardStatus] = useState(false)
  const [todayValue, setTodayValue] = useState();
  const db = SQLite.openDatabase("water.db");
  function date() {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  const createTables = async() => {
    await db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS water(id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE DEFAULT (CURRENT_DATE), value INTEGER);`,
        [],
        (sqlTxn, res) => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
  const getValue = async() => {
   await db.transaction(txn => {
      txn.executeSql(
        `SELECT id, date, value FROM water`,
        [],
        (sqlTxn, res) => {
          console.log("value retrieved successfully");
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, date: item.date, value: item.value });
            }
            setValue(results);
          }
        },
        error => {
          console.log("error on getting categories " + error.message);
        },
      );
    });
  };
  const getTodayValue = async()=>{
    const data = date()
    await db.transaction(txn => {
      txn.executeSql(
        `SELECT id, date, value FROM water WHERE date = ?`,
        [data],
        async(sqlTxn, res) => {
          console.log("todayValue retrieved successfully");
          let len = res.rows.length;
          if (len === 1) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, date: item.date, value: item.value });
            }
            setTodayValue(results);
          }
          else{
            const insertQuery = `INSERT INTO water ( date, value) VALUES ( ?, ?)`;
            await db.transaction((tx)=>{tx.executeSql(insertQuery, [ data, water])});
          }
        },
        error => {
          console.log("error on getting todayValue " );
        },
      );
    });
  }
  const saveValue = async() => {
   const data = date()
    // перевірка наявності запису за датою
    await db.transaction(txn => {
      txn.executeSql(
        `SELECT id, date, value FROM water WHERE date = ?`,
        [data],
        async(sqlTxn, res) => {
          let len = res.rows.length;
          if (len === 0) {
            const insertQuery = `INSERT INTO water ( date, value) VALUES ( ?, ?)`;
            await db.transaction((tx)=>{tx.executeSql(insertQuery, [data, water])});
          }
          else {
            if(water !== 0){
            const updateQuery = `UPDATE water SET value = ${water} WHERE date = ?`;
            await db.transaction((tx)=>{tx.executeSql(updateQuery, [data])});
            }
          }
        },
        error => {
          console.log("error on getting categories " + error.message);
        },
      );
    });
  };
  // MOUNT
  useEffect(()=>{
    createTables();
    getTodayValue();
  },[])

  // water cheak
  useEffect(()=>{
    if(todayValue !== undefined){
      setWater(todayValue[0].value)
    }
  },[todayValue])

  // save water
  useEffect(()=>{
    saveValue()
  },[water])
  // keyboard
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
          <Header/>
        {activePage === "main" ? <Main water={water} keyboardStatus = {keyboardStatus} setWater = {setWater}/> : <History value = {value}/>}
          <Footer page = {activePage} setActivePage = {setActivePage} />
          <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "rgb(55,180,195)" : "rgb(179,185,196)",
    width:"100%"
  }
});
