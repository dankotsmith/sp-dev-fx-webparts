import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'asyncAwaitPnPJsStrings';
import AsyncAwaitPnPJs from './components/AsyncAwaitPnPJs';
import { IAsyncAwaitPnPJsProps } from './components/IAsyncAwaitPnPJsProps';
import { IAsyncAwaitPnPJsWebPartProps } from './IAsyncAwaitPnPJsWebPartProps';

export default class AsyncAwaitPnPJsWebPart extends BaseClientSideWebPart<IAsyncAwaitPnPJsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAsyncAwaitPnPJsProps > = React.createElement(
      AsyncAwaitPnPJs,
      {
        description: this.properties.description,
        pageContext: this.context.pageContext
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
