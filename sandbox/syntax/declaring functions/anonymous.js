{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "f1",
            "range": [
              4,
              6
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 6
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "arg1",
                "range": [
                  18,
                  22
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  24,
                  28
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 24
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                }
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "arg1",
                      "range": [
                        40,
                        44
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 8
                        },
                        "end": {
                          "line": 2,
                          "column": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        47,
                        51
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 15
                        },
                        "end": {
                          "line": 2,
                          "column": 19
                        }
                      }
                    },
                    "range": [
                      40,
                      51
                    ],
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 8
                      },
                      "end": {
                        "line": 2,
                        "column": 19
                      }
                    }
                  },
                  "range": [
                    33,
                    52
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1
                    },
                    "end": {
                      "line": 2,
                      "column": 20
                    }
                  }
                }
              ],
              "range": [
                30,
                54
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 30
                },
                "end": {
                  "line": 3,
                  "column": 1
                }
              }
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              54
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 3,
                "column": 1
              }
            }
          },
          "range": [
            4,
            54
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 1
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        0,
        55
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 2
        }
      }
    }
  ],
  "range": [
    0,
    55
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 3,
      "column": 2
    }
  },
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        0,
        3
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        4,
        6
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 4
        },
        "end": {
          "line": 1,
          "column": 6
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        7,
        8
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 7
        },
        "end": {
          "line": 1,
          "column": 8
        }
      }
    },
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        9,
        17
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 9
        },
        "end": {
          "line": 1,
          "column": 17
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        17,
        18
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 17
        },
        "end": {
          "line": 1,
          "column": 18
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        18,
        22
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 22
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        22,
        23
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 22
        },
        "end": {
          "line": 1,
          "column": 23
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        24,
        28
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 24
        },
        "end": {
          "line": 1,
          "column": 28
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        28,
        29
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 28
        },
        "end": {
          "line": 1,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        30,
        31
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 30
        },
        "end": {
          "line": 1,
          "column": 31
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        33,
        39
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 1
        },
        "end": {
          "line": 2,
          "column": 7
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        40,
        44
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 8
        },
        "end": {
          "line": 2,
          "column": 12
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        45,
        46
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 13
        },
        "end": {
          "line": 2,
          "column": 14
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        47,
        51
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 15
        },
        "end": {
          "line": 2,
          "column": 19
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        51,
        52
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 19
        },
        "end": {
          "line": 2,
          "column": 20
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        53,
        54
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 1
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        54,
        55
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 1
        },
        "end": {
          "line": 3,
          "column": 2
        }
      }
    }
  ]
}