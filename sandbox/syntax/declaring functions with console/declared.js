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
            "id": {
              "type": "Identifier",
              "name": "f1",
              "range": [
                18,
                20
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 18
                },
                "end": {
                  "line": 1,
                  "column": 20
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "name": "arg1",
                "range": [
                  21,
                  25
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 21
                  },
                  "end": {
                    "line": 1,
                    "column": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  27,
                  31
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 27
                  },
                  "end": {
                    "line": 1,
                    "column": 31
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
                          36,
                          43
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
                          44,
                          47
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
                        36,
                        47
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
                          48,
                          53
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
                          55,
                          64
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
                      36,
                      65
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
                    36,
                    66
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
                        75,
                        79
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
                        82,
                        86
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
                      75,
                      86
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
                    68,
                    87
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
                33,
                89
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 33
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
              89
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
            89
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
        90
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
            93,
            95
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
            "value": 3,
            "raw": "3",
            "range": [
              96,
              97
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
            "value": 4,
            "raw": "4",
            "range": [
              98,
              99
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
          93,
          100
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
        93,
        101
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
    101
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
      "type": "Identifier",
      "value": "f1",
      "range": [
        18,
        20
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 20
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        20,
        21
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 20
        },
        "end": {
          "line": 1,
          "column": 21
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        21,
        25
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 21
        },
        "end": {
          "line": 1,
          "column": 25
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        25,
        26
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 25
        },
        "end": {
          "line": 1,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        27,
        31
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 27
        },
        "end": {
          "line": 1,
          "column": 31
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        31,
        32
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 31
        },
        "end": {
          "line": 1,
          "column": 32
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        33,
        34
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 33
        },
        "end": {
          "line": 1,
          "column": 34
        }
      }
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        36,
        43
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
        43,
        44
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
        44,
        47
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
        47,
        48
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
        48,
        53
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
        53,
        54
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
        55,
        64
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
        64,
        65
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
        65,
        66
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
        68,
        74
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
        75,
        79
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
        80,
        81
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
        82,
        86
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
        86,
        87
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
        88,
        89
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
        89,
        90
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
        93,
        95
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
        95,
        96
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
      "value": "3",
      "range": [
        96,
        97
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
        97,
        98
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
      "value": "4",
      "range": [
        98,
        99
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
        99,
        100
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
        100,
        101
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