import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  // NavigationMenuIndicator,
  // NavigationMenuViewport,
} from './';

export default {
  title: 'Example/Navigation Menu',
  component: NavigationMenu,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavigationMenu>;

const Template: ComponentStory<typeof NavigationMenu> = (args) => (
  <NavigationMenu {...args}>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export const Default = Template.bind({});
Default.args = {};