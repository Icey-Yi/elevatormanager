import React, { useEffect } from 'react';

const Bmap = props => {

  const {
    data,
    loading,
  } = props;

  useEffect(() => {
    console.log(data);

    if (!loading && (data.length !== 0)) {
      var markers = [];
      let points = data.map((item, index) => ({
        property: item.property,
        community: item.community,
        name: item.name,
        lng: item.lng,
        lat: item.lat,
        elevator_id: item.elevator_id,
        address: item.address,
        status: item.status,
      }));
      var bmap = new BMap.Map("map");    // 创建Map实例
      var point = new BMap.Point(points[0].lng, points[0].lat);// 创建中心点坐标 
      bmap.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
      bmap.enableScrollWheelZoom(true);
      bmap.addControl(new BMap.NavigationControl());

      let myIcon = '';
      points.forEach(item => {
        switch (item.status) {
          case 'N':
            myIcon = new BMap.Icon("/img/normal.png", new BMap.Size(40, 40), { imageSize: new BMap.Size(40, 40) });
            break;
          case 'W':
            myIcon = new BMap.Icon("/img/warning.png", new BMap.Size(40, 40), { imageSize: new BMap.Size(40, 40) });
            break;
          case 'E':
            myIcon = new BMap.Icon("/img/error.png", new BMap.Size(40, 40), { imageSize: new BMap.Size(40, 40) });
            break;
          case 'O':
            myIcon = new BMap.Icon("/img/offline.png", new BMap.Size(40, 40), { imageSize: new BMap.Size(40, 40) });
            break;
          default:
            myIcon = new BMap.Icon("/img/normal.png", new BMap.Size(40, 40), { imageSize: new BMap.Size(40, 40) });
            break;
        }

        let point = new BMap.Point(item.lng, item.lat);
        let marker = new BMap.Marker(point, { icon: myIcon });  // 创建标注
        bmap.addOverlay(marker);

        addClickHandler(item.address, marker);

        if (item.status === 'E') {
          marker.setAnimation(window.BMAP_ANIMATION_BOUNCE);
        }
        if (item.status === 'N') {
          markers.push(marker);
        };
      });
    }
    var markerClusterer = new BMapLib.MarkerClusterer(bmap, { markers: markers });

    function addClickHandler(content, marker) {
      marker.addEventListener("click", function (e) {
        openInfo(content, e)
      });
    }
    

    function openInfo(content, e) {
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 , opts
      bmap.openInfoWindow(infoWindow, point); //开启信息窗口
      infoWindow.redraw();
    }
  }, [data]);

  return (
      <div id='map' style={{ height: '100%' }}></div>
  );
}

export default Bmap;



