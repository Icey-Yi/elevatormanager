import React, { useEffect } from 'react';

const Dmap = () => {

 
  useEffect(() => {
    var subwayCityName = '北京';
    var list = BMapSub.SubwayCitiesList;
    var subwaycity = null;
    for (var i = 0; i < list.length; i++) {
        if (list[i].name === subwayCityName) {
            subwaycity = list[i];
            break;
        }
    }
    // 获取北京地铁数据-初始化地铁图
    var subway = new BMapSub.Subway('map', subwaycity.citycode);
    subway.setZoom(0.5);
  }, [])

  return (
      <div id='map' style={{ height: '100%' }}></div>
  );
}

export default Dmap;



