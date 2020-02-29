import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'root',
    storage: storage
}

export default createStore(persistReducer(rootPersistConfig, toggleFavorite))