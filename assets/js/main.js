let elem=document.getElementById('img-absolute');let left=38;let top=-17;let id=setInterval(frame,50);function frame(){if(left===51||top===-40){clearInterval(id);}else{left++;top=top-1.75;elem.style.left=left+"px";elem.style.top=top+"px";}}let tail=document.getElementById('tail');let wave=0;function taleMove(){if(wave===50){clearInterval(time1);}else{wave++;tail.style.transform="rotateZ("+wave+"deg)";}}function taleMoveBack(){if(wave===0){clearInterval(time2);}else{wave--;tail.style.transform="rotateZ("+wave+"deg)";}}let time1=setInterval(taleMove,20);let time2=setInterval(taleMoveBack,40);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZWZ0IiwidG9wIiwiaWQiLCJzZXRJbnRlcnZhbCIsImZyYW1lIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlIiwidGFpbCIsIndhdmUiLCJ0YWxlTW92ZSIsInRpbWUxIiwidHJhbnNmb3JtIiwidGFsZU1vdmVCYWNrIiwidGltZTIiXSwibWFwcGluZ3MiOiJBQUFBLEdBQUlBLENBQUFBLElBQUksQ0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQVgsQ0FDQSxHQUFJQyxDQUFBQSxJQUFJLENBQUcsRUFBWCxDQUNBLEdBQUlDLENBQUFBLEdBQUcsQ0FBRyxDQUFDLEVBQVgsQ0FDQSxHQUFJQyxDQUFBQSxFQUFFLENBQUdDLFdBQVcsQ0FBQ0MsS0FBRCxDQUFRLEVBQVIsQ0FBcEIsQ0FDQSxRQUFTQSxDQUFBQSxLQUFULEVBQWtCLENBQ2hCLEdBQUlKLElBQUksR0FBSyxFQUFULEVBQWVDLEdBQUcsR0FBSyxDQUFDLEVBQTVCLENBQWdDLENBQzlCSSxhQUFhLENBQUNILEVBQUQsQ0FBYixDQUNELENBRkQsSUFFTyxDQUNMRixJQUFJLEdBQ0pDLEdBQUcsQ0FBR0EsR0FBRyxDQUFHLElBQVosQ0FDQUosSUFBSSxDQUFDUyxLQUFMLENBQVdOLElBQVgsQ0FBa0JBLElBQUksQ0FBRyxJQUF6QixDQUNBSCxJQUFJLENBQUNTLEtBQUwsQ0FBV0wsR0FBWCxDQUFpQkEsR0FBRyxDQUFHLElBQXZCLENBQ0QsQ0FDRixDQUdELEdBQUlNLENBQUFBLElBQUksQ0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVgsQ0FDQSxHQUFJUyxDQUFBQSxJQUFJLENBQUcsQ0FBWCxDQUNBLFFBQVNDLENBQUFBLFFBQVQsRUFBcUIsQ0FDbkIsR0FBSUQsSUFBSSxHQUFLLEVBQWIsQ0FBaUIsQ0FDZkgsYUFBYSxDQUFDSyxLQUFELENBQWIsQ0FDRCxDQUZELElBRU8sQ0FDTEYsSUFBSSxHQUNKRCxJQUFJLENBQUNELEtBQUwsQ0FBV0ssU0FBWCxDQUF1QixXQUFhSCxJQUFiLENBQW9CLE1BQTNDLENBQ0QsQ0FDRixDQUVELFFBQVNJLENBQUFBLFlBQVQsRUFBeUIsQ0FDdkIsR0FBSUosSUFBSSxHQUFLLENBQWIsQ0FBZ0IsQ0FDZEgsYUFBYSxDQUFDUSxLQUFELENBQWIsQ0FDRCxDQUZELElBRU8sQ0FDTEwsSUFBSSxHQUNKRCxJQUFJLENBQUNELEtBQUwsQ0FBV0ssU0FBWCxDQUF1QixXQUFhSCxJQUFiLENBQW9CLE1BQTNDLENBQ0QsQ0FDRixDQUVELEdBQUlFLENBQUFBLEtBQUssQ0FBR1AsV0FBVyxDQUFDTSxRQUFELENBQVcsRUFBWCxDQUF2QixDQUNBLEdBQUlJLENBQUFBLEtBQUssQ0FBR1YsV0FBVyxDQUFDUyxZQUFELENBQWUsRUFBZixDQUF2QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLWFic29sdXRlJyk7XG5sZXQgbGVmdCA9IDM4O1xubGV0IHRvcCA9IC0xNztcbmxldCBpZCA9IHNldEludGVydmFsKGZyYW1lLCA1MCk7XG5mdW5jdGlvbiBmcmFtZSAoKSB7XG4gIGlmIChsZWZ0ID09PSA1MSB8fCB0b3AgPT09IC00MCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9IGVsc2Uge1xuICAgIGxlZnQrKztcbiAgICB0b3AgPSB0b3AgLSAxLjc1O1xuICAgIGVsZW0uc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgZWxlbS5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gIH1cbn1cblxuXG5sZXQgdGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWlsJyk7XG5sZXQgd2F2ZSA9IDA7XG5mdW5jdGlvbiB0YWxlTW92ZSAoKSB7XG4gIGlmICh3YXZlID09PSA1MCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZTEpO1xuICB9IGVsc2Uge1xuICAgIHdhdmUrKztcbiAgICB0YWlsLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWihcIiArIHdhdmUgKyBcImRlZylcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWxlTW92ZUJhY2sgKCkge1xuICBpZiAod2F2ZSA9PT0gMCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZTIpO1xuICB9IGVsc2Uge1xuICAgIHdhdmUtLTtcbiAgICB0YWlsLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWihcIiArIHdhdmUgKyBcImRlZylcIjtcbiAgfVxufVxuXG5sZXQgdGltZTEgPSBzZXRJbnRlcnZhbCh0YWxlTW92ZSwgMjApO1xubGV0IHRpbWUyID0gc2V0SW50ZXJ2YWwodGFsZU1vdmVCYWNrLCA0MCk7Il19
