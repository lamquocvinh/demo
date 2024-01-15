
import { useEffect, useRef, useState } from "react";
import useMousePosition from "./test1";
import { Select, Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';


const Circle = () => {
  const navigate = useNavigate();

  const canvasRef = useRef();

  const [coords, handleCoords] = useMousePosition(true);

  const location = useLocation();

  const image = new Image();
  image.src = 'https://vinavic.vn/wp-content/uploads/2016/09/mot-so-ban-ve-ho-so-thiet-ke-ky-thuat-thi-cong-cong-trinh-kien-truc_4_.jpg';

  const [point, setpoint] = useState([]);

  const [selectedDrillType, setSelectedDrillType] = useState();

  const handleDrillTypeChange = (value) => {
    setSelectedDrillType(value);
  }

  const resetDrillType = () => {
    setSelectedDrillType(() => null);
  }

  const handlePointClick = (point) => {
    navigate(location.pathname + "/" + "/projects/1/pileplan/" + point.drillType);
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  }, [])

  useEffect(() => {
    const pointFromStorage = JSON.parse(localStorage.getItem('point'));
    setpoint(pointFromStorage);
  }, [])

  const drawpoint = () => {
    point.forEach((point) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const { x, y } = point;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);

      ctx.fill();

      point.onClick = () => handlePointClick(point)
    });
  }

  return (
    <>
      <div className="container">
        <canvas
          id="canvas"
          ref={canvasRef}
          width="1210"
          height="525"
          style={{ border: "2px solid black", borderRadius: "15px" }}
          onClick={(e) => {
            handleCoords(e);
            const clickedX = e.clientX;
            const clickedY = e.clientY;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const color = '#79ACD9';
            const clickedPoint = point.find(point => {
              return (
                Math.abs(point.x - clickedX) < 5 &&
                Math.abs(point.y - clickedY) < 5
              )
            });

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(coords.x, coords.y, 5, 0, 2 * Math.PI);
            ctx.fill();
            point.onClick = () => handlePointClick(point)
            drawpoint();
            if (clickedPoint) {
              clickedPoint.onClick()
            }
          }}
        />
      </div>

      <Button type="primary"
        disabled={!selectedDrillType}
        onClick={() => {
          if (!selectedDrillType) {
            <h1>select the Drill Type</h1>
            return;
          }
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          point.push({
            x: coords.x,
            y: coords.y,
            drillType: selectedDrillType
          });
          localStorage.setItem('point', JSON.stringify(point));
          ctx.save(0, 0, canvas.width, canvas.height);
          resetDrillType();
        }}
      >
        SAVE
      </Button>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        onChange={handleDrillTypeChange}
        options={[
          {
            value: 'MP1A',
            label: 'MP1A',
          },
          {
            value: 'MP1B',
            label: 'MP1B',
          },
        ]}
      />

    </>
  );
};

export default Circle;