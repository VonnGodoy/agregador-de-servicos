import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContext  from './src/contexts/UserContext';
import ServiceContext  from './src/contexts/ServiceContext';
import ProviderContext  from './src/contexts/ProviderContext';
import MainStack from './src/components/stacks/mainStack';

export default () => {
  return (
    <UserContext>
      <ServiceContext>
        <ProviderContext>
          <NavigationContainer>
              <MainStack />
          </NavigationContainer>
        </ProviderContext>
      </ServiceContext>
    </UserContext>
  );
}