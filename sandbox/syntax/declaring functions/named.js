{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "f1",
        "range": [
          9,
          11
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arg1",
          "range": [
            12,
            16
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 12
            },
            "end": {
              "line": 1,
              "column": 16
            }
          }
        },
        {
          "type": "Identifier",
          "name": "arg2",
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
                  34,
                  38
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
                  41,
                  45
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
                34,
                45
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
              27,
              46
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
          24,
          48
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 24
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
        0,
        48
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 1
        }
      }
    }
  ],
  "range": [
    0,
    48
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 3,
      "column": 1
    }
  },
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        0,
        8
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 8
        }
      }
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        9,
        11
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 9
        },
        "end": {
          "line": 1,
          "column": 11
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        11,
        12
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 11
        },
        "end": {
          "line": 1,
          "column": 12
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        12,
        16
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 12
        },
        "end": {
          "line": 1,
          "column": 16
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        16,
        17
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 16
        },
        "end": {
          "line": 1,
          "column": 17
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg2",
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
      "value": ")",
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
      "type": "Punctuator",
      "value": "{",
      "range": [
        24,
        25
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 24
        },
        "end": {
          "line": 1,
          "column": 25
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        27,
        33
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
        34,
        38
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
        39,
        40
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
        41,
        45
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
        45,
        46
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
        47,
        48
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
    }
  ]
}