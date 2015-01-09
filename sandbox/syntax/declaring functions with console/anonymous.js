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
                          33,
                          40
                        ],
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 1
                          },
                          "end": {
                            "line": 2,
                            "column": 8
                          }
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "log",
                        "range": [
                          41,
                          44
                        ],
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 9
                          },
                          "end": {
                            "line": 2,
                            "column": 12
                          }
                        }
                      },
                      "range": [
                        33,
                        44
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 1
                        },
                        "end": {
                          "line": 2,
                          "column": 12
                        }
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "f1:",
                        "raw": "'f1:'",
                        "range": [
                          45,
                          50
                        ],
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 13
                          },
                          "end": {
                            "line": 2,
                            "column": 18
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "arguments",
                        "range": [
                          52,
                          61
                        ],
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 20
                          },
                          "end": {
                            "line": 2,
                            "column": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      33,
                      62
                    ],
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 1
                      },
                      "end": {
                        "line": 2,
                        "column": 30
                      }
                    }
                  },
                  "range": [
                    33,
                    63
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1
                    },
                    "end": {
                      "line": 2,
                      "column": 31
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "arg1",
                      "range": [
                        72,
                        76
                      ],
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 8
                        },
                        "end": {
                          "line": 3,
                          "column": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        79,
                        83
                      ],
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 15
                        },
                        "end": {
                          "line": 3,
                          "column": 19
                        }
                      }
                    },
                    "range": [
                      72,
                      83
                    ],
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 8
                      },
                      "end": {
                        "line": 3,
                        "column": 19
                      }
                    }
                  },
                  "range": [
                    65,
                    84
                  ],
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 1
                    },
                    "end": {
                      "line": 3,
                      "column": 20
                    }
                  }
                }
              ],
              "range": [
                30,
                86
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 30
                },
                "end": {
                  "line": 4,
                  "column": 1
                }
              }
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              86
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 4,
                "column": 1
              }
            }
          },
          "range": [
            4,
            86
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 1
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        0,
        87
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "f1",
          "range": [
            90,
            92
          ],
          "loc": {
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 2
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "range": [
              93,
              94
            ],
            "loc": {
              "start": {
                "line": 7,
                "column": 3
              },
              "end": {
                "line": 7,
                "column": 4
              }
            }
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "range": [
              95,
              96
            ],
            "loc": {
              "start": {
                "line": 7,
                "column": 5
              },
              "end": {
                "line": 7,
                "column": 6
              }
            }
          }
        ],
        "range": [
          90,
          97
        ],
        "loc": {
          "start": {
            "line": 7,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        }
      },
      "range": [
        90,
        98
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 8
        }
      }
    }
  ],
  "range": [
    0,
    98
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 7,
      "column": 8
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
      "type": "Identifier",
      "value": "console",
      "range": [
        33,
        40
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 1
        },
        "end": {
          "line": 2,
          "column": 8
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        40,
        41
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 8
        },
        "end": {
          "line": 2,
          "column": 9
        }
      }
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        41,
        44
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 9
        },
        "end": {
          "line": 2,
          "column": 12
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        44,
        45
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 12
        },
        "end": {
          "line": 2,
          "column": 13
        }
      }
    },
    {
      "type": "String",
      "value": "'f1:'",
      "range": [
        45,
        50
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 13
        },
        "end": {
          "line": 2,
          "column": 18
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        50,
        51
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 18
        },
        "end": {
          "line": 2,
          "column": 19
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        52,
        61
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 20
        },
        "end": {
          "line": 2,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        61,
        62
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 29
        },
        "end": {
          "line": 2,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        62,
        63
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 30
        },
        "end": {
          "line": 2,
          "column": 31
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        65,
        71
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 1
        },
        "end": {
          "line": 3,
          "column": 7
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        72,
        76
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 8
        },
        "end": {
          "line": 3,
          "column": 12
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        77,
        78
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 13
        },
        "end": {
          "line": 3,
          "column": 14
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        79,
        83
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 15
        },
        "end": {
          "line": 3,
          "column": 19
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        83,
        84
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 19
        },
        "end": {
          "line": 3,
          "column": 20
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        85,
        86
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 1
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        86,
        87
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 1
        },
        "end": {
          "line": 4,
          "column": 2
        }
      }
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        90,
        92
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 2
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        92,
        93
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 2
        },
        "end": {
          "line": 7,
          "column": 3
        }
      }
    },
    {
      "type": "Numeric",
      "value": "1",
      "range": [
        93,
        94
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 3
        },
        "end": {
          "line": 7,
          "column": 4
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        94,
        95
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 4
        },
        "end": {
          "line": 7,
          "column": 5
        }
      }
    },
    {
      "type": "Numeric",
      "value": "2",
      "range": [
        95,
        96
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 5
        },
        "end": {
          "line": 7,
          "column": 6
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        96,
        97
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 6
        },
        "end": {
          "line": 7,
          "column": 7
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        97,
        98
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 7
        },
        "end": {
          "line": 7,
          "column": 8
        }
      }
    }
  ]
}