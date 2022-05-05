import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import { Route, Switch } from 'react-router-dom';

import { data } from '../Data/users';
import { updateContacts } from '../actions/contact';

import './stylesheets/App.css';
import './stylesheets/leftSidebar.css';
import SearchBar from './LeftSidebar/SearchBar';
import ContactList from './LeftSidebar/ContactList';
import ConversationList from './RightSidebar/ConversationList';
import NoConvo from './RightSidebar/NoConvo';
import ProfileHeader from './LeftSidebar/ProfileHeader';
import NewConversation from './LeftSidebar/NewConversation';
import NewConversationTab from './LeftSidebar/NewConversationTab';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchfield, setSearchField] = useState('');
  const [newConvoTab, showNewConvoTab] = useState(false);
  const user = useSelector((state) => state.user);
  const stateContacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  // fetch contacts from
  useEffect(() => {
    // dispatch action to store contacts in state
    dispatch(updateContacts(data.profile.contacts));
    setContacts(stateContacts.contacts);
  }, [dispatch, stateContacts.contacts]);
  //handle search change
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter results
  const filteredContacts = contacts.filter((contact) => {
    //this will return only the contacts whose name is same as searched input
    return contact.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="left-sidebar" xs={6} sm={5} md={4} lg={5} xl={4}>
            <Row className="left-sidebar-header">
              <Row className="d-flex align-items-center">
                <Col>
                  {' '}
                  <ProfileHeader user={user} />
                </Col>
                <Col>
                  {' '}
                  <NewConversation showNewConvoTab={showNewConvoTab} />
                </Col>
              </Row>
              <Row
                style={{
                  margin: 'auto',
                  paddingTop: 'px',
                }}
              >
                <SearchBar searchChange={onSearchChange} />
              </Row>
            </Row>
            <Row>
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>
          <Col className="right-sidebar" xs={6} sm={7} md={8} lg={7} xl={8}>
            <Switch>
              <Route
                path="/conversations/:id"
                render={(props) => (
                  <ConversationList {...props} contacts={contacts} />
                )}
              />
              <Route component={NoConvo} />
            </Switch>
            {newConvoTab && (
              <NewConversationTab
                contacts={contacts}
                showNewConvoTab={showNewConvoTab}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
