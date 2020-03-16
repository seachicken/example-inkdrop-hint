'use babel';

import ExampleInkdropHintMessageDialog from './example-inkdrop-hint-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(ExampleInkdropHintMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'ExampleInkdropHintMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'ExampleInkdropHintMessageDialog'
    )
    inkdrop.components.deleteClass(ExampleInkdropHintMessageDialog);
  }

};
