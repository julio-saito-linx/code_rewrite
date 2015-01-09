'use strict';

module.exports =
function (filename, functionName, loc) {

    var start_line   = loc && loc.start && loc.start.line;
    var start_column = loc && loc.start && loc.start.column;

    return {
  "type": "Program",
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
              0,
              7
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 7
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "log",
            "range": [
              8,
              11
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 11
              }
            }
          },
          "range": [
            0,
            11
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 11
            }
          }
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
                        "type": "Literal",
                        "value": "\n>>------------------------------------------------------\n",
                        "raw": "'\\n>>------------------------------------------------------\\n'",
                        "range": [
                          12,
                          74
                        ],
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 12
                          },
                          "end": {
                            "line": 1,
                            "column": 74
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": "  "+ functionName +"()",
                        "raw": "'  "+ functionName +"()'",
                        "range": [
                          89,
                          112
                        ],
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 12
                          },
                          "end": {
                            "line": 2,
                            "column": 35
                          }
                        }
                      },
                      "range": [
                        12,
                        112
                      ],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 12
                        },
                        "end": {
                          "line": 2,
                          "column": 35
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "      at ("+ filename +":"+ start_line +":"+ start_column +")",
                      "raw": "'      at ("+ filename +":"+ start_line +":"+ start_column +")'",
                      "range": [
                        127,
                        173
                      ],
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 12
                        },
                        "end": {
                          "line": 3,
                          "column": 58
                        }
                      }
                    },
                    "range": [
                      12,
                      173
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 12
                      },
                      "end": {
                        "line": 3,
                        "column": 58
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "\n    ----------------------------------------------------\n",
                    "raw": "'\\n    ----------------------------------------------------\\n'",
                    "range": [
                      188,
                      250
                    ],
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 12
                      },
                      "end": {
                        "line": 4,
                        "column": 74
                      }
                    }
                  },
                  "range": [
                    12,
                    250
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 12
                    },
                    "end": {
                      "line": 4,
                      "column": 74
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "    arguments: ",
                  "raw": "'    arguments: '",
                  "range": [
                    265,
                    282
                  ],
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 12
                    },
                    "end": {
                      "line": 5,
                      "column": 29
                    }
                  }
                },
                "range": [
                  12,
                  282
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 12
                  },
                  "end": {
                    "line": 5,
                    "column": 29
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "require",
                      "range": [
                        285,
                        292
                      ],
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 32
                        },
                        "end": {
                          "line": 5,
                          "column": 39
                        }
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "util",
                        "raw": "'util'",
                        "range": [
                          293,
                          299
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 40
                          },
                          "end": {
                            "line": 5,
                            "column": 46
                          }
                        }
                      }
                    ],
                    "range": [
                      285,
                      300
                    ],
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 32
                      },
                      "end": {
                        "line": 5,
                        "column": 47
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "inspect",
                    "range": [
                      301,
                      308
                    ],
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 48
                      },
                      "end": {
                        "line": 5,
                        "column": 55
                      }
                    }
                  },
                  "range": [
                    285,
                    308
                  ],
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 32
                    },
                    "end": {
                      "line": 5,
                      "column": 55
                    }
                  }
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Array",
                            "range": [
                              309,
                              314
                            ],
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 56
                              },
                              "end": {
                                "line": 5,
                                "column": 61
                              }
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "prototype",
                            "range": [
                              315,
                              324
                            ],
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 62
                              },
                              "end": {
                                "line": 5,
                                "column": 71
                              }
                            }
                          },
                          "range": [
                            309,
                            324
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 56
                            },
                            "end": {
                              "line": 5,
                              "column": 71
                            }
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "splice",
                          "range": [
                            325,
                            331
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 72
                            },
                            "end": {
                              "line": 5,
                              "column": 78
                            }
                          }
                        },
                        "range": [
                          309,
                          331
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 56
                          },
                          "end": {
                            "line": 5,
                            "column": 78
                          }
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "call",
                        "range": [
                          332,
                          336
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 79
                          },
                          "end": {
                            "line": 5,
                            "column": 83
                          }
                        }
                      },
                      "range": [
                        309,
                        336
                      ],
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 56
                        },
                        "end": {
                          "line": 5,
                          "column": 83
                        }
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "arguments",
                        "range": [
                          337,
                          346
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 84
                          },
                          "end": {
                            "line": 5,
                            "column": 93
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "range": [
                          348,
                          349
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 95
                          },
                          "end": {
                            "line": 5,
                            "column": 96
                          }
                        }
                      }
                    ],
                    "range": [
                      309,
                      350
                    ],
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 56
                      },
                      "end": {
                        "line": 5,
                        "column": 97
                      }
                    }
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
                            354,
                            364
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 101
                            },
                            "end": {
                              "line": 5,
                              "column": 111
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "range": [
                            366,
                            370
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 113
                            },
                            "end": {
                              "line": 5,
                              "column": 117
                            }
                          }
                        },
                        "kind": "init",
                        "range": [
                          354,
                          370
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 101
                          },
                          "end": {
                            "line": 5,
                            "column": 117
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "depth",
                          "range": [
                            372,
                            377
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 119
                            },
                            "end": {
                              "line": 5,
                              "column": 124
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "range": [
                            379,
                            380
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 126
                            },
                            "end": {
                              "line": 5,
                              "column": 127
                            }
                          }
                        },
                        "kind": "init",
                        "range": [
                          372,
                          380
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 119
                          },
                          "end": {
                            "line": 5,
                            "column": 127
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "colors",
                          "range": [
                            382,
                            388
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 129
                            },
                            "end": {
                              "line": 5,
                              "column": 135
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "range": [
                            390,
                            394
                          ],
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 137
                            },
                            "end": {
                              "line": 5,
                              "column": 141
                            }
                          }
                        },
                        "kind": "init",
                        "range": [
                          382,
                          394
                        ],
                        "loc": {
                          "start": {
                            "line": 5,
                            "column": 129
                          },
                          "end": {
                            "line": 5,
                            "column": 141
                          }
                        }
                      }
                    ],
                    "range": [
                      352,
                      396
                    ],
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 99
                      },
                      "end": {
                        "line": 5,
                        "column": 143
                      }
                    }
                  }
                ],
                "range": [
                  285,
                  397
                ],
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 32
                  },
                  "end": {
                    "line": 5,
                    "column": 144
                  }
                }
              },
              "range": [
                12,
                397
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 12
                },
                "end": {
                  "line": 5,
                  "column": 144
                }
              }
            },
            "right": {
              "type": "Literal",
              "value": "\n<<------------------------------------------------------\n",
              "raw": "'\\n<<------------------------------------------------------\\n'",
              "range": [
                412,
                474
              ],
              "loc": {
                "start": {
                  "line": 6,
                  "column": 12
                },
                "end": {
                  "line": 6,
                  "column": 74
                }
              }
            },
            "range": [
              12,
              474
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 12
              },
              "end": {
                "line": 6,
                "column": 74
              }
            }
          }
        ],
        "range": [
          0,
          475
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 75
          }
        }
      },
      "range": [
        0,
        476
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 76
        }
      }
    }
  ],
  "range": [
    0,
    476
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 6,
      "column": 76
    }
  },
  "comments": [],
  "tokens": [
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        0,
        7
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
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
      "type": "Identifier",
      "value": "log",
      "range": [
        8,
        11
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 8
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
      "type": "String",
      "value": "'\\n>>------------------------------------------------------\\n'",
      "range": [
        12,
        74
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 12
        },
        "end": {
          "line": 1,
          "column": 74
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        75,
        76
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 75
        },
        "end": {
          "line": 1,
          "column": 76
        }
      }
    },
    {
      "type": "String",
      "value": "'  "+ functionName +"()'",
      "range": [
        89,
        112
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 12
        },
        "end": {
          "line": 2,
          "column": 35
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        113,
        114
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 36
        },
        "end": {
          "line": 2,
          "column": 37
        }
      }
    },
    {
      "type": "String",
      "value": "'      at ("+ filename +":"+ start_line +":"+ start_column +")'",
      "range": [
        127,
        173
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 12
        },
        "end": {
          "line": 3,
          "column": 58
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        174,
        175
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 59
        },
        "end": {
          "line": 3,
          "column": 60
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n    ----------------------------------------------------\\n'",
      "range": [
        188,
        250
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 12
        },
        "end": {
          "line": 4,
          "column": 74
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        251,
        252
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 75
        },
        "end": {
          "line": 4,
          "column": 76
        }
      }
    },
    {
      "type": "String",
      "value": "'    arguments: '",
      "range": [
        265,
        282
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 12
        },
        "end": {
          "line": 5,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        283,
        284
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 30
        },
        "end": {
          "line": 5,
          "column": 31
        }
      }
    },
    {
      "type": "Identifier",
      "value": "require",
      "range": [
        285,
        292
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 32
        },
        "end": {
          "line": 5,
          "column": 39
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        292,
        293
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 39
        },
        "end": {
          "line": 5,
          "column": 40
        }
      }
    },
    {
      "type": "String",
      "value": "'util'",
      "range": [
        293,
        299
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 40
        },
        "end": {
          "line": 5,
          "column": 46
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        299,
        300
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 46
        },
        "end": {
          "line": 5,
          "column": 47
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        300,
        301
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 47
        },
        "end": {
          "line": 5,
          "column": 48
        }
      }
    },
    {
      "type": "Identifier",
      "value": "inspect",
      "range": [
        301,
        308
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 48
        },
        "end": {
          "line": 5,
          "column": 55
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        308,
        309
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 55
        },
        "end": {
          "line": 5,
          "column": 56
        }
      }
    },
    {
      "type": "Identifier",
      "value": "Array",
      "range": [
        309,
        314
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 56
        },
        "end": {
          "line": 5,
          "column": 61
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        314,
        315
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 61
        },
        "end": {
          "line": 5,
          "column": 62
        }
      }
    },
    {
      "type": "Identifier",
      "value": "prototype",
      "range": [
        315,
        324
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 62
        },
        "end": {
          "line": 5,
          "column": 71
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        324,
        325
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 71
        },
        "end": {
          "line": 5,
          "column": 72
        }
      }
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        325,
        331
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 72
        },
        "end": {
          "line": 5,
          "column": 78
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        331,
        332
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 78
        },
        "end": {
          "line": 5,
          "column": 79
        }
      }
    },
    {
      "type": "Identifier",
      "value": "call",
      "range": [
        332,
        336
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 79
        },
        "end": {
          "line": 5,
          "column": 83
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        336,
        337
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 83
        },
        "end": {
          "line": 5,
          "column": 84
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        337,
        346
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 84
        },
        "end": {
          "line": 5,
          "column": 93
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        346,
        347
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 93
        },
        "end": {
          "line": 5,
          "column": 94
        }
      }
    },
    {
      "type": "Numeric",
      "value": "0",
      "range": [
        348,
        349
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 95
        },
        "end": {
          "line": 5,
          "column": 96
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        349,
        350
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 96
        },
        "end": {
          "line": 5,
          "column": 97
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        350,
        351
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 97
        },
        "end": {
          "line": 5,
          "column": 98
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        352,
        353
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 99
        },
        "end": {
          "line": 5,
          "column": 100
        }
      }
    },
    {
      "type": "Identifier",
      "value": "showHidden",
      "range": [
        354,
        364
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 101
        },
        "end": {
          "line": 5,
          "column": 111
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        364,
        365
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 111
        },
        "end": {
          "line": 5,
          "column": 112
        }
      }
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        366,
        370
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 113
        },
        "end": {
          "line": 5,
          "column": 117
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        370,
        371
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 117
        },
        "end": {
          "line": 5,
          "column": 118
        }
      }
    },
    {
      "type": "Identifier",
      "value": "depth",
      "range": [
        372,
        377
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 119
        },
        "end": {
          "line": 5,
          "column": 124
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        377,
        378
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 124
        },
        "end": {
          "line": 5,
          "column": 125
        }
      }
    },
    {
      "type": "Numeric",
      "value": "3",
      "range": [
        379,
        380
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 126
        },
        "end": {
          "line": 5,
          "column": 127
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        380,
        381
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 127
        },
        "end": {
          "line": 5,
          "column": 128
        }
      }
    },
    {
      "type": "Identifier",
      "value": "colors",
      "range": [
        382,
        388
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 129
        },
        "end": {
          "line": 5,
          "column": 135
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        388,
        389
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 135
        },
        "end": {
          "line": 5,
          "column": 136
        }
      }
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        390,
        394
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 137
        },
        "end": {
          "line": 5,
          "column": 141
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        395,
        396
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 142
        },
        "end": {
          "line": 5,
          "column": 143
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        396,
        397
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 143
        },
        "end": {
          "line": 5,
          "column": 144
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        398,
        399
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 145
        },
        "end": {
          "line": 5,
          "column": 146
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n<<------------------------------------------------------\\n'",
      "range": [
        412,
        474
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 12
        },
        "end": {
          "line": 6,
          "column": 74
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        474,
        475
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 74
        },
        "end": {
          "line": 6,
          "column": 75
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        475,
        476
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 75
        },
        "end": {
          "line": 6,
          "column": 76
        }
      }
    }
  ]
};




};
