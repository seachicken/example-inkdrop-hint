'use babel';

import { remote } from 'electron';
import ExampleInkdropHintMessageDialog from './example-inkdrop-hint-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(ExampleInkdropHintMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'ExampleInkdropHintMessageDialog'
    )

    inkdrop.onEditorLoad(editor => {
      const modulePath = `${remote.app.getAppPath()}/node_modules/`;
      require(`${modulePath}codemirror/addon/hint/show-hint`);

      editor.cm.setOption('extraKeys', {
        'Ctrl-Space': () => {
          editor.cm.showHint({
            completeSingle: false,
            hint: () => {
              const cur = editor.cm.getCursor();
              return {
                list: [ { text: 'a' }, { text: 'b' } ],
                from: cur,
                to: cur
              };
            }
          });
        }
      });
    });
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'ExampleInkdropHintMessageDialog'
    )
    inkdrop.components.deleteClass(ExampleInkdropHintMessageDialog);
  }

};
