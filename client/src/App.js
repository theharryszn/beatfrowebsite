import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import PlayLists from './components/pages/playlists'
import Layouts from './components/layout';
import Albums from './components/pages/albums';
import Favourites from './components/pages/favourites';
import Track from './components/pages/track';
import PlayList from './components/pages/playlist';
import Album from './components/pages/album';
import Search from './components/pages/search';
import Welcome from './components/pages/welcome';
import UploadTrack from './components/mini/forms/uploadTrack';
import Blog from './components/pages/blog';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { ReactQueryConfigProvider } from 'react-query';
import SignIn from './components/pages/signin';
import SignUp from './components/pages/signup';
import WriteBlog from './components/pages/writeBlog';
import ModalContextProvider from './context/modalContext';
import Recent from './components/pages/recent';
import SearchContextProvider from './context/searchContext';
import Account from './components/pages/account';
import Profile from './components/pages/profile';
import uploadAlbum from './components/mini/forms/uploadAlbum';




function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="bgDark splash-screen">
  <HashLoader color="#36D94F" />
  </div>;
  return children
}

function App() {

  const queryConfig = { queries: { refetchOnWindowFocus: false } }
  return (
    <ReactQueryConfigProvider config={queryConfig}>
    <SearchContextProvider>
    <div className="bgDark w-screen h-screen">
    <BrowserRouter>
    <ModalContextProvider>
    <AuthIsLoaded>
          <Switch>
            <Route exact path="/createaccount" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/" component={Welcome}/>
            <Layouts>
              <Route exact path="/listen" component={Home}/>
              <Route exact path="/playlists" component={PlayLists}/>
              <Route exact path="/albums" component={Albums}/>
              <Route exact path="/favourites" component={Favourites}/>
              <Route exact path="/recent" component={Recent}/>
              
              <Route exact path="/search" component={Search}/>
              
              <Route exact path="/tracks/:id" component={Track}/>
              <Route exact path="/playlist/:id" component={PlayList}/>
              <Route exact path="/album/:id" component={Album}/>
              <Route exact path="/blogs" component={Blog}/>
              <Route exact path="/writeblog" component={WriteBlog}/>



              <Route exact path="/profile/:id" component={Profile}/>
              <Route exact path="/account" component={Account}/>
              
              <Route exact path="/uploadtrack" component={UploadTrack}/>
              <Route exact path="/uploadalbum" component={uploadAlbum}/>
            </Layouts>
          </Switch>
        </AuthIsLoaded>
        </ModalContextProvider>
      </BrowserRouter>
    </div>
    </SearchContextProvider>
    </ReactQueryConfigProvider>
  );
}

export default App;
