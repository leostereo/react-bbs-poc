import { Vector3 } from "@babylonjs/core";
import { FC } from "react"


type PlatformData = {
  name: string;
  height: number;
  width: number;
  size: number;
  pos_x: number;
  pos_y: number;
  pos_z: number;
  ang_x: number;
  ang_y: number;
  ang_z: number;
}

const Platform: FC = () => {


    const hardPlatforms:PlatformData[] = [
        { name: 'plat1', size: 40, height: 1, width: 10, pos_x: 0, pos_y: 0, pos_z: -35, ang_x: 0, ang_y: 0, ang_z: 0 },
        { name: 'plat2', size: 10, height: 1, width: 40, pos_x: -20, pos_y: 0, pos_z: -60, ang_x: 0, ang_y: 0, ang_z: 0 },
        { name: 'plat3', size: 40, height: 1, width: 10, pos_x: -35, pos_y: 0, pos_z: -35, ang_x: 15, ang_y: 0, ang_z: 0 },
        { name: 'plat4', size: 40, height: 1, width: 10, pos_x: -35, pos_y: 10, pos_z: 0, ang_x: 0, ang_y: 0, ang_z: 0 },
        { name: 'plat5', size: 10, height: 1, width: 20, pos_x: -20, pos_y: 5, pos_z: 10, ang_x: 0, ang_y: 0, ang_z: -10 },

    ]
    return (
      <>{ hardPlatforms.map((platform)=>{
          const position = new Vector3(platform.pos_x,platform.pos_y,platform.pos_z);
          const rotation = new Vector3(platform.ang_x,platform.ang_y,platform.ang_z);
          return (
          <box
            name={platform.name}
            size={platform.size}
            height={platform.height}
            width={platform.width}
            position={position}
            rotation={rotation}
          />)
      })}
  
      </>
    )
  }

  export default Platform;