'use strict';

module.exports =
function (functionName, loc) {
    var startLine = loc && loc.start && loc.start.line;
    return {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "splice",
            "range": [
              4,
              10
            ]
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Array",
                "range": [
                  13,
                  18
                ]
              },
              "property": {
                "type": "Identifier",
                "name": "prototype",
                "range": [
                  19,
                  28
                ]
              },
              "range": [
                13,
                28
              ]
            },
            "property": {
              "type": "Identifier",
              "name": "splice",
              "range": [
                29,
                35
              ]
            },
            "range": [
              13,
              35
            ]
          },
          "range": [
            4,
            35
          ]
        }
      ],
      "kind": "var",
      "range": [
        0,
        36
      ]
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "debugSource",
            "range": [
              41,
              52
            ]
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "splice",
                "range": [
                  55,
                  61
                ]
              },
              "property": {
                "type": "Identifier",
                "name": "call",
                "range": [
                  62,
                  66
                ]
              },
              "range": [
                55,
                66
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "arguments",
                "range": [
                  67,
                  76
                ]
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "range": [
                  78,
                  79
                ]
              }
            ],
            "range": [
              55,
              80
            ]
          },
          "range": [
            41,
            80
          ]
        }
      ],
      "kind": "var",
      "range": [
        37,
        81
      ]
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "util",
            "range": [
              86,
              90
            ]
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "require",
              "range": [
                93,
                100
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "util",
                "raw": "'util'",
                "range": [
                  101,
                  107
                ]
              }
            ],
            "range": [
              93,
              108
            ]
          },
          "range": [
            86,
            108
          ]
        }
      ],
      "kind": "var",
      "range": [
        82,
        109
      ]
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "scrubbed",
            "range": [
              114,
              122
            ]
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "util",
                "range": [
                  125,
                  129
                ]
              },
              "property": {
                "type": "Identifier",
                "name": "inspect",
                "range": [
                  130,
                  137
                ]
              },
              "range": [
                125,
                137
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "debugSource",
                "range": [
                  138,
                  149
                ]
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "showHidden",
                      "range": [
                        157,
                        167
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "range": [
                        169,
                        173
                      ]
                    },
                    "kind": "init",
                    "range": [
                      157,
                      173
                    ]
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "depth",
                      "range": [
                        179,
                        184
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "range": [
                        186,
                        187
                      ]
                    },
                    "kind": "init",
                    "range": [
                      179,
                      187
                    ]
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "colors",
                      "range": [
                        193,
                        199
                      ]
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "range": [
                        201,
                        205
                      ]
                    },
                    "kind": "init",
                    "range": [
                      193,
                      205
                    ]
                  }
                ],
                "range": [
                  151,
                  207
                ]
              }
            ],
            "range": [
              125,
              208
            ]
          },
          "range": [
            114,
            208
          ]
        }
      ],
      "kind": "var",
      "range": [
        110,
        209
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "console",
            "range": [
              210,
              217
            ]
          },
          "property": {
            "type": "Identifier",
            "name": "log",
            "range": [
              218,
              221
            ]
          },
          "range": [
            210,
            221
          ]
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "\n>>------------------------------------------------------\n",
                            "raw": "'\\n>>------------------------------------------------------\\n'",
                            "range": [
                              222,
                              284
                            ]
                          },
                          "right": {
                            "type": "Literal",
                            "value": "  source: ( ",
                            "raw": "'  source: ( '",
                            "range": [
                              287,
                              301
                            ]
                          },
                          "range": [
                            222,
                            301
                          ]
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "__filename",
                          "range": [
                            304,
                            314
                          ]
                        },
                        "range": [
                          222,
                          314
                        ]
                      },
                      "right": {
                        "type": "Literal",
                        "value": " )",
                        "raw": "' )'",
                        "range": [
                          317,
                          321
                        ]
                      },
                      "range": [
                        222,
                        321
                      ]
                    },
                    "right": {
                      "type": "Literal",
                      "value": "\n  ------------------------------------------------------\n",
                      "raw": "'\\n  ------------------------------------------------------\\n'",
                      "range": [
                        324,
                        386
                      ]
                    },
                    "range": [
                      222,
                      386
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "value": "    " + functionName + "() " + startLine,
                    "raw": "'    " + functionName + "()' " + startLine,
                    "range": [
                      389,
                      399
                    ]
                  },
                  "range": [
                    222,
                    399
                  ]
                },
                "right": {
                  "type": "Literal",
                  "value": "\n    ----------------------------------------------------\n    arguments: ",
                  "raw": "'\\n    ----------------------------------------------------\\n    arguments: '",
                  "range": [
                    402,
                    479
                  ]
                },
                "range": [
                  222,
                  479
                ]
              },
              "right": {
                "type": "Identifier",
                "name": "scrubbed",
                "range": [
                  482,
                  490
                ]
              },
              "range": [
                222,
                490
              ]
            },
            "right": {
              "type": "Literal",
              "value": "\n<<------------------------------------------------------\n",
              "raw": "'\\n<<------------------------------------------------------\\n'",
              "range": [
                493,
                555
              ]
            },
            "range": [
              222,
              555
            ]
          }
        ],
        "range": [
          210,
          556
        ]
      },
      "range": [
        210,
        557
      ]
    }
  ],
  "range": [
    0,
    557
  ],
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        0,
        3
      ]
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        4,
        10
      ]
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        11,
        12
      ]
    },
    {
      "type": "Identifier",
      "value": "Array",
      "range": [
        13,
        18
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        18,
        19
      ]
    },
    {
      "type": "Identifier",
      "value": "prototype",
      "range": [
        19,
        28
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        28,
        29
      ]
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        29,
        35
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        35,
        36
      ]
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        37,
        40
      ]
    },
    {
      "type": "Identifier",
      "value": "debugSource",
      "range": [
        41,
        52
      ]
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        53,
        54
      ]
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        55,
        61
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        61,
        62
      ]
    },
    {
      "type": "Identifier",
      "value": "call",
      "range": [
        62,
        66
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        66,
        67
      ]
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        67,
        76
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        76,
        77
      ]
    },
    {
      "type": "Numeric",
      "value": "0",
      "range": [
        78,
        79
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        79,
        80
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        80,
        81
      ]
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        82,
        85
      ]
    },
    {
      "type": "Identifier",
      "value": "util",
      "range": [
        86,
        90
      ]
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        91,
        92
      ]
    },
    {
      "type": "Identifier",
      "value": "require",
      "range": [
        93,
        100
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        100,
        101
      ]
    },
    {
      "type": "String",
      "value": "'util'",
      "range": [
        101,
        107
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        107,
        108
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        108,
        109
      ]
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        110,
        113
      ]
    },
    {
      "type": "Identifier",
      "value": "scrubbed",
      "range": [
        114,
        122
      ]
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        123,
        124
      ]
    },
    {
      "type": "Identifier",
      "value": "util",
      "range": [
        125,
        129
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        129,
        130
      ]
    },
    {
      "type": "Identifier",
      "value": "inspect",
      "range": [
        130,
        137
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        137,
        138
      ]
    },
    {
      "type": "Identifier",
      "value": "debugSource",
      "range": [
        138,
        149
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        149,
        150
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        151,
        152
      ]
    },
    {
      "type": "Identifier",
      "value": "showHidden",
      "range": [
        157,
        167
      ]
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        167,
        168
      ]
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        169,
        173
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        173,
        174
      ]
    },
    {
      "type": "Identifier",
      "value": "depth",
      "range": [
        179,
        184
      ]
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        184,
        185
      ]
    },
    {
      "type": "Numeric",
      "value": "3",
      "range": [
        186,
        187
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        187,
        188
      ]
    },
    {
      "type": "Identifier",
      "value": "colors",
      "range": [
        193,
        199
      ]
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        199,
        200
      ]
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        201,
        205
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        206,
        207
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        207,
        208
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        208,
        209
      ]
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        210,
        217
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        217,
        218
      ]
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        218,
        221
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        221,
        222
      ]
    },
    {
      "type": "String",
      "value": "'\\n>>------------------------------------------------------\\n'",
      "range": [
        222,
        284
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        285,
        286
      ]
    },
    {
      "type": "String",
      "value": "'  source: ( '",
      "range": [
        287,
        301
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        302,
        303
      ]
    },
    {
      "type": "Identifier",
      "value": "__filename",
      "range": [
        304,
        314
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        315,
        316
      ]
    },
    {
      "type": "String",
      "value": "' )'",
      "range": [
        317,
        321
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        322,
        323
      ]
    },
    {
      "type": "String",
      "value": "'\\n  ------------------------------------------------------\\n'",
      "range": [
        324,
        386
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        387,
        388
      ]
    },
    {
      "type": "String",
      "value": "'    " + functionName + "()' " + startLine,
      "range": [
        389,
        399
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        400,
        401
      ]
    },
    {
      "type": "String",
      "value": "'\\n    ----------------------------------------------------\\n    arguments: '",
      "range": [
        402,
        479
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        480,
        481
      ]
    },
    {
      "type": "Identifier",
      "value": "scrubbed",
      "range": [
        482,
        490
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        491,
        492
      ]
    },
    {
      "type": "String",
      "value": "'\\n<<------------------------------------------------------\\n'",
      "range": [
        493,
        555
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        555,
        556
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        556,
        557
      ]
    }
  ]
};




};
