import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createTrailbaseProvider } from "/workspaces/react_practice/react-tutorial/ra-trailbase.js";

// Your TrailBase URL (remove trailing slash to be safe)
const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev".replace(/\/+$/, "");

// Vite supports top-level await, so this is valid
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} >
    {/* Names must match your TrailBase Record API names exactly */}
    <Resource name="BOOK" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="PUBLISHER" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="STUDENT" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="ORDERS" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="REQUEST" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
);

export default App;
