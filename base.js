/**
 * Created by nour on 3/24/17.
 */
import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
    if (!HAS_INITIALIZED) {
        const config = {
            apiKey: "AIzaSyA73poyEXEjJpZSApOFzFQqJrTuYF0Ba7w",
            authDomain: "com.ToDoApp.android",
            databaseURL: "https://todoapp-36dde.firebaseio.com",
            storageBucket: "todoapp-36dde.appspot.com",
        }

        Firebase.database.enableLogging(true)
        Firebase.initializeApp(config)
        HAS_INITIALIZED = true
    }
}

export const getDatabase = () => {
    initFirebase()
    return Firebase.database()
}