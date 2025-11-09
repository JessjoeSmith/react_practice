import { Admin, radiantDarkTheme, Resource, ShowGuesser} from "react-admin";
import { createTrailbaseProvider } from "/workspaces/react_practice/react-tutorial/ra-trailbase.js";

import { BookList, BookEdit, BookCreate,BookShow } from "../table/BOOK";
import { PublisherList, PublisherEdit, PublisherCreate, PublisherShow} from "../table/PUBLISHER";
import { StudentList, StudentEdit, StudentCreate } from "../table/STUDENT";
import { OrderList, OrderEdit, OrderCreate, OrderShow } from "../table/ORDERS";
import { RequestList, RequestEdit, RequestCreate } from "../table/REQUEST";




// Your TrailBase URL (remove trailing slash to be safe)
const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev".replace(/\/+$/, "");

// Vite supports top-level await, so this is valid
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={radiantDarkTheme}>
    {/* Names must match your TrailBase Record API names exactly */}
    <Resource name="BOOK" list={BookList} edit={BookEdit} create={BookCreate} show={BookShow} />
    <Resource name="PUBLISHER" list={PublisherList} edit={PublisherEdit} create={PublisherCreate} show={PublisherShow}/>
    <Resource name="STUDENT" list={StudentList} edit={StudentEdit} create={StudentCreate} show={ShowGuesser}/>
    <Resource name="ORDERS" list={OrderList} edit={OrderEdit} create={OrderCreate} show={OrderShow}/>
    <Resource name="REQUEST" list={RequestList} edit={RequestEdit} create={RequestCreate} show={ShowGuesser}/>
  </Admin>
);


export default App;
