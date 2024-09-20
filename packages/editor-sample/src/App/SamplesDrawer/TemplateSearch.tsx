import React, {useState, useEffect} from 'react';

import {Link, Stack, Typography} from '@mui/material';
import TextInput from "../InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextInput";
import {resetDocument} from "../../documents/editor/EditorContext";
import getConfiguration from "../../getConfiguration";

function toCode(jsonStringified) {
    // const c = encodeURIComponent(JSON.stringify(document));
    // location.hash = `#code/${btoa(c)}`;
    const document = JSON.parse(jsonStringified);
    const c = encodeURIComponent(JSON.stringify(document));
    return btoa(c);
    // location.hash = `#code/${btoa(c)}`;
}

export default function TemplateSearch() {

    const [keyword, setKeyword] = useState('');
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        if (keyword === '' || keyword.length > 1) {
            const fetchTemplates = async () => {
                // const response = await fetch(`http://localhost:8000/dev/bulk-mails/templates?keyword=${keyword}`);
                const response = await fetch(`/bulk-mails/templates?keyword=${keyword}`);
                const json = await response.json();
                setTemplates(json.data);
            }
            fetchTemplates();
        }
    }, [keyword])

    return (
        <Stack>
            <Typography variant="h6" component="h1" sx={{p: 0.75}}>
                기존 템플릿 검색
            </Typography>
            <Stack px={.5} mt={1}>
                <TextInput
                    label="검색어"
                    defaultValue={keyword}
                    onChange={(v) => {
                        setKeyword(v);
                    }}
                />
                <Stack mt={2} spacing={1}>
                    {templates && templates.map((template, i) => (
                        <Link key={i}
                              // href={`/email-builder-js/#template/${toCode(template.content_json)}`}
                              href={`#template/${toCode(template.content_json)}`}
                              onClick={() => {
                                  setTimeout(() => {
                                        resetDocument(getConfiguration(location.hash));
                                  }, 100)
                              }}
                        >{template.name}</Link>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}
