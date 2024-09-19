import { IconButton, Snackbar, Tooltip } from '@mui/material';
import { Save } from '@mui/icons-material';
import React, { useMemo, useState } from 'react';
import { useDocument } from '../../documents/editor/EditorContext';
import { renderToStaticMarkup } from '@usewaypoint/email-builder';

export default function SaveButton() {
  const [message, setMessage] = useState<string | null>(null);
  const document = useDocument();
  const codeJson = useMemo(() => JSON.stringify(document, null, '  '), [document]);
  const codeHtml = useMemo(() => renderToStaticMarkup(document, { rootBlockId: 'root' }), [document]);

  const onClick = () => {
    // const c = encodeURIComponent(JSON.stringify(document));
    // location.hash = `#code/${btoa(c)}`;
    // console.log(codeJson);
    // console.log(codeHtml);

    // set opener input content_html, content_json
    const opener = window.opener;
    if (opener) {
      opener.document.getElementById('content_html').value = codeHtml;
      opener.document.getElementById('content_json').value = codeJson;
      // if iframe#preview exists, update it
      const previewFrame = opener.document.getElementById('preview-frame');
      if (previewFrame) {
        previewFrame.setAttribute('srcdoc', codeHtml);
      } else {
          alert('미리보기 아이프레임을 찾을 수 없습니다.');
      }
    }

    // const c = encodeURIComponent(JSON.stringify(document));
    // location.hash = `#code/${btoa(c)}`;
    // console.log(`#code/${btoa(c)}`);
    alert('템플릿이 반영되었습니다. 메일 템플릿을 저장해야 최종 저장됩니다.');

    // close window
    window.close();
  };

  const onClose = () => {
    setMessage(null);
  };

  return (
    <>
      <IconButton onClick={onClick}>
        <Tooltip title="템플릿 저장">
          <Save fontSize="small" />
        </Tooltip>
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={message !== null}
        onClose={onClose}
        message={message}
      />
    </>
  );
}
