import {TEditorConfiguration} from '../../documents/editor/core';

const OTONDO_SAMPLE: TEditorConfiguration = {
    root: {
        type: 'EmailLayout',
        data: {
            backdropColor: '#F2F5F7',
            borderRadius: 12,
            canvasColor: '#FFFFFF',
            textColor: '#242424',
            fontFamily: 'MODERN_SANS',
            childrenIds: [
                'block-1709571212684',
                'block-1709571228545',
                'block-1709571234315',
                'block-1726715839186',
                'block-1709571258507',
                'block-1726739239107',
                'block-1726739814647',
                'block-1709571281151',
                'block-1709571302968',
                'block-1726715569295',
                'block-1726715560572',
                'block-1726715577280'
            ]
        }
    },
    'block-1709571212684': {
        type: 'Image',
        data: {
            style: {
                padding: {
                    top: 24,
                    bottom: 24,
                    right: 24,
                    left: 24
                },
                textAlign: 'center'
            },
            props: {
                height: 36,
                url: 'https://otondo-cdn.s3.ap-northeast-2.amazonaws.com/assets/images/otondo-logo-h.png',
                alt: 'OTONDO LOGO',
                linkHref: 'https://otondo.co.kr',
                contentAlignment: 'middle'
            }
        }
    },
    'block-1709571228545': {
        type: 'Text',
        data: {
            style: {
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                text: '안녕하세요 회원님'
            }
        }
    },
    'block-1709571234315': {
        type: 'Text',
        data: {
            style: {
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                markdown: true,
                text: '__상상이 현실이 되다, 오톤도__\n이제 원하는 제품으로 상상하는 멋진 3D 설계 디자인을\n쉽고, 빠르게 만들어 보세요!\n상상이 현실이 됩니다.'
            }
        }
    },
    'block-1709571258507': {
        type: 'Image',
        data: {
            style: {
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                url: 'https://otondo-cdn.s3.ap-northeast-2.amazonaws.com/assets/images/sample-1.png',
                alt: 'Video thumbnail',
                linkHref: 'https://otondo.co.kr',
                contentAlignment: 'middle'
            }
        }
    },
    'block-1709571281151': {
        type: 'Text',
        data: {
            style: {
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                markdown: true,
                text: '이제 모든 인테리어는, 오톤도 3D 설계로 시작하세요.\n\n오톤도 드림'
            }
        }
    },
    'block-1709571302968': {
        type: 'Button',
        data: {
            style: {
                fontSize: 14,
                textAlign: 'center',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                buttonBackgroundColor: '#0095cc',
                buttonStyle: 'pill',
                text: '버튼 텍스트',
                url: 'https://otondo.co.kr'
            }
        }
    },
    'block-1726715560572': {
        type: 'Divider',
        data: {
            style: {
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 20,
                    left: 20
                }
            },
            props: {
                lineColor: '#CCCCCC'
            }
        }
    },
    'block-1726715569295': {
        type: 'Text',
        data: {
            style: {
                fontSize: 14,
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                text: '버튼이 작동하지 않을 경우 다음 링크를 브라우저 주소에 붙여넣기 해 주세요: https://otondo.co.kr'
            }
        }
    },
    'block-1726715577280': {
        type: 'Text',
        data: {
            style: {
                color: '#737373',
                fontSize: 12,
                fontWeight: 'normal',
                textAlign: 'center',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                text: '© 2024 OTONDO. All rights reserved.'
            }
        }
    },
    'block-1726715839186': {
        type: 'Text',
        data: {
            style: {
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                markdown: true,
                text: '* 일시: 2024년 모월 모일\n* 장소: 서울시 어딘가\n* 내용: 오프라인 교육 진행\n* 강사: 😀 매니저'
            }
        }
    },
    'block-1726739239107': {
        type: 'Text',
        data: {
            style: {
                fontWeight: 'normal',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                markdown: true,
                text: '### 마크다운 간단 문법\n\n#### 리스트\n1. 번호 항목 작성 예시\n1. 번호 항목 작성 예시\n\n#### 컬러\n- <span style="color:red">빨강</span>\n- <span style="color:red">__굵은 빨강__</span>\n- <span style="color:blue">파랑</span>\n- <span style="background-color: yellow">형광펜</span>\n\n#### 폰트\n- _이탤릭_, *이탤릭*\n- __굵게__, **굵게**\n- ~취소~\n- <u>밑줄</u>\n\n#### 아이콘\n- 😍 하트입니다.\n- 🇰🇷 태극기입니다.\n- 윈도우 특수문자 __윈도우키+;(세미콜론)__\n- 맥OS 특수문자 __Ctrl + Cmd + Space Bar__\n\n'
            }
        }
    },
    'block-1726739814647': {
        type: 'ColumnsContainer',
        data: {
            style: {
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 24,
                    left: 24
                }
            },
            props: {
                columnsCount: 2,
                columnsGap: 16,
                columns: [
                    {
                        childrenIds: [
                            'block-1726739818684'
                        ]
                    },
                    {
                        childrenIds: [
                            'block-1726739827559'
                        ]
                    },
                    {
                        childrenIds: []
                    }
                ]
            }
        }
    },
    'block-1726739818684': {
        type: 'Image',
        data: {
            style: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                }
            },
            props: {
                url: 'https://otondo-cdn.s3.ap-northeast-2.amazonaws.com/assets/images/3d-design-1.png',
                alt: 'Sample product',
                linkHref: null,
                contentAlignment: 'middle'
            }
        }
    },
    'block-1726739827559': {
        type: 'Text',
        data: {
            style: {
                color: '#16A34A',
                fontSize: 16,
                fontWeight: 'bold',
                padding: {
                    top: 16,
                    bottom: 16,
                    right: 0,
                    left: 0
                }
            },
            props: {
                text: '이미지 업로드 버튼을 사용해서 이미지를 업로드할 수 있습니다!!!'
            }
        }
    }
};

export default OTONDO_SAMPLE;
