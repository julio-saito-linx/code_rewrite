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
                    27,
                    34
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
                    35,
                    38
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
                  27,
                  38
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
                    39,
                    44
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
                    46,
                    55
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
                27,
                56
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
              27,
              57
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
                  66,
                  70
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
                  73,
                  77
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
                66,
                77
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
              59,
              78
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
          24,
          80
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 24
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
        0,
        80
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 1
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
            82,
            84
          ],
          "loc": {
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 2
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "range": [
              85,
              86
            ],
            "loc": {
              "start": {
                "line": 6,
                "column": 3
              },
              "end": {
                "line": 6,
                "column": 4
              }
            }
          },
          {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "range": [
              87,
              88
            ],
            "loc": {
              "start": {
                "line": 6,
                "column": 5
              },
              "end": {
                "line": 6,
                "column": 6
              }
            }
          }
        ],
        "range": [
          82,
          89
        ],
        "loc": {
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 7
          }
        }
      },
      "range": [
        82,
        90
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 8
        }
      }
    }
  ],
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
      "line": 6,
      "column": 8
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
      "type": "Identifier",
      "value": "console",
      "range": [
        27,
        34
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
        34,
        35
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
        35,
        38
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
        38,
        39
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
        39,
        44
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
        44,
        45
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
        46,
        55
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
        55,
        56
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
        56,
        57
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
        59,
        65
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
        66,
        70
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
        71,
        72
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
        73,
        77
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
        77,
        78
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
        79,
        80
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
      "type": "Identifier",
      "value": "f1",
      "range": [
        82,
        84
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 2
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        84,
        85
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 2
        },
        "end": {
          "line": 6,
          "column": 3
        }
      }
    },
    {
      "type": "Numeric",
      "value": "5",
      "range": [
        85,
        86
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 3
        },
        "end": {
          "line": 6,
          "column": 4
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        86,
        87
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 4
        },
        "end": {
          "line": 6,
          "column": 5
        }
      }
    },
    {
      "type": "Numeric",
      "value": "6",
      "range": [
        87,
        88
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 5
        },
        "end": {
          "line": 6,
          "column": 6
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        88,
        89
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 6
        },
        "end": {
          "line": 6,
          "column": 7
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
          "line": 6,
          "column": 7
        },
        "end": {
          "line": 6,
          "column": 8
        }
      }
    }
  ]
}