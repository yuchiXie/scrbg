import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { TestImages } from '@uifabric/example-data';
import  CalendarInline  from '../../containers/calendar/calendar'
import {DetailsListDocuments} from '../../containers/tabylist/tabylist'
import './css/site.css'

var echarts = require('echarts');
const examplePersona: IPersonaSharedProps = {
    imageUrl: TestImages.personaFemale,
    imageInitials: 'AL',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
  };
export class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('EchartFirst'),'light');
      var secondChart = echarts.init(document.getElementById('EchartSecond'),'light');
      // 绘制图表
      myChart.setOption({
        textStyle: {
          color: 'rgb(114,116,118)'
      },
      series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'video'},
                {value:274, name:'Alliance'},
                {value:310, name:'Email'},
                {value:335, name:'Visit'},
                {value:400, name:'Search'}
            ],
            roseType: 'angle',
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          },center : [ '50%', '50%' ]
        }
    ]
      });
      secondChart.setOption({
        textStyle: {
          color: 'white'
        },
        title:{
          Color:'white'
        },
        legend: {},
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {type: 'category'},
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
        ]
      })
    }
    render(){
        return(
            <div>
                <div className='NameTitle backDsign'>
                <CommandBar
                    items={this.getItems()}
                    // overflowItems={this.getOverlflowItems()}
                    overflowButtonProps={{ ariaLabel: 'More commands' }}
                    // farItems={this.getFarItems()}
                    ariaLabel={'Use left and right arrow keys to navigate between commands'}
                 />
                    <Persona className='person' {...examplePersona} size={PersonaSize.size32} hidePersonaDetails={false} presence={PersonaPresence.online} />
                    {/* <span className='NameSpan'>xxxx</span> */}
                </div>
                <div id='EchartFirst' className='EchartsFirst'></div>
                <div id='EchartSecond' className='EchartsSecond'></div>
                <div className='Inf'>
                  <CalendarInline/>
                </div>
                <div className='TableList'>
                  <DetailsListDocuments/>
                </div>
                {/* <footer className='Footer'>中国路桥工程有限责任公司版权所有 | 京ICP备09028108号 | 京公网安备 11010102001123号</footer> */}
            </div>
        )
    }
    private getItems = () => {
        return [
          {
            key: 'newItem',
            name: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
            iconProps: {
              iconName: 'Add'
            },
            ariaLabel: 'New',
            subMenuProps: {
              items: [
                {
                  key: 'emailMessage',
                  name: 'Email message',
                  iconProps: {
                    iconName: 'Mail'
                  },
                  ['data-automation-id']: 'newEmailButton'
                },
                {
                  key: 'calendarEvent',
                  name: 'Calendar event',
                  iconProps: {
                    iconName: 'Calendar'
                  }
                }
              ]
            }
          },
          {
            key: 'upload',
            name: 'Upload',
            iconProps: {
              iconName: 'Upload'
            },
            href: 'https://dev.office.com/fabric',
            ['data-automation-id']: 'uploadButton'
          },
          {
            key: 'share',
            name: 'Share',
            iconProps: {
              iconName: 'Share'
            },
            onClick: () => console.log('Share')
          },
          {
            key: 'download',
            name: 'Download',
            iconProps: {
              iconName: 'Download'
            },
            onClick: () => console.log('Download')
          }
        ];
      };
}