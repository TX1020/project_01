//监控区域
(function () {
    $(".monitor .tabs").on("click", "a", function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        $(".monitor .content").eq($(this).index()).show().siblings('.content').hide();
        // console.log($(this).index());
    })
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();
// 点位分布
(function () {
    //实例化对象
    var myChart = echarts.init(document.querySelector('.pie'))
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ],
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                }
            }
        ]
    };
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 柱形图模块
(function () {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1,
            [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: "3%",
            containLabel: true,
            show: true,
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [
            {
                type: 'category',
                data: ["上海",
                    "广州",
                    "北京",
                    "深圳",
                    "合肥",
                    "",
                    "......",
                    "",
                    "杭州",
                    "厦门",
                    "济南",
                    "成都",
                    "重庆"],
                axisTick: {
                    alignWithLabel: false, show: false,
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value', axisTick: {
                    alignWithLabel: false, show: false,
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    item,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240]
            }
        ]
    };
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//销售统计模块
(function () {
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var myChart = echarts.init(document.querySelector('.line'))
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: "10%",
            textStyle: {
                color: "#4c9bfd"
            },
            data: ['预期销售额', '实际销售额'],

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true,
            show: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                smooth: true,
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
            },
            {
                smooth: true,
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
            },
        ]
    };
    myChart.setOption(option);
    //点击切换效果
    $('.sales .caption').on('click', 'a', function () {
        index = $(this).index() - 1;
        $(this).addClass('active').siblings('a').removeClass('active');
        // console.log(this.dataset.type);
        // console.log(data.year);
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        myChart.setOption(option);
    })
    var as = $(".sales .caption a");
    var index = 0;
    var time = setInterval(function () {
        index++;
        if (index >= 4) {
            index = 0
        };
        as.eq(index).click();
    }, 2000);
    $('.sales').hover(function () {
        clearInterval(time);
    }, function () {
        var time = setInterval(function () {
            index++;
            if (index >= 4) {
                index = 0
            };
            as.eq(index).click();
        }, 3000);
    });
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//销售渠道模块
(function () {
    var myChart = echarts.init(document.querySelector('.radar'));
    const dataBJ = [
        [50, 19, 56, 11, 34],
    ];


    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    var option = {
        tooltip: {
            show: true,
            position: ['50%', '50%']
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            radius: ["0%", "50%"],
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: 'rgb(238, 197, 102)',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)',
                        'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)',
                        'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)',
                        'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.1
                },
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 2,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 8
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//仪表盘模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
        series: [
            {
                name: "销售进度",
                type: "pie",
                radius: ["130%", "150%"],
                // 移动下位置  套住50%文字
                center: ["48%", "80%"],
                //是否启用防止标签重叠策略
                // avoidLabelOverlap: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                // 饼形图的起始角度为 180， 注意不是旋转角度
                startAngle: 180,
                // 鼠标经过不需要放大偏移图形
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    {
                        value: 100,
                        itemStyle: {
                            color: "#12274d"
                        }
                    },
                    {
                        value: 200,
                        itemStyle: {
                            color: "transparent"
                        }
                    }
                ]
            }
        ]
    };
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//全国热榜模块
(function () {
    // 1. 准备相关数据
    var hotData = [
        {
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    //  2. 根据数据渲染各省热销 sup 模块内容
    // (1) 遍历 hotData对象
    var supHTML = "";
    $.each(hotData, function (index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    // 把生成的5个小li字符串给 sub dom盒子
    $(".sup").html(supHTML);
    // 3. 当鼠标进入 tab 的时候
    // 鼠标经过当前的小li要高亮显示
    $('.province .sup').on('mouseenter', 'li', function () {
        $(this).addClass('active').siblings().removeClass();
        // var index = $(this).index();
        // console.log(index);
        // console.log(hotData[$(this).index()].brands);
        var subHTML = "";
        $.each(hotData[$(this).index()].brands, function (index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
        });
        $(".sub").html(subHTML);
    })
})();