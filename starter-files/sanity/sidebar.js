import React, { Children } from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Fancy custom sidebar!
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // Create list item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Create new document ID
            .documentId('downtown')
        ),
      // Add remaining items
      ...S.documentTypeListItems().filter(
        item => item.getId() !== 'storeSettings'
      ),
    ]);
}
