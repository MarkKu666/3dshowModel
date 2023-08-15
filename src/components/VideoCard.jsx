/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 123.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function VideoCard(props) {
  const { nodes, materials } = useGLTF('/video-card.glb')

  const fan1Ref = useRef();
  const fan2Ref = useRef();
  const fan3Ref = useRef();

  useFrame(() => {
    // 旋轉風扇 1
    if (fan1Ref.current) {
      fan1Ref.current.rotation.y -= 0.01;  // 調整旋轉速度
    }
    // 旋轉風扇 2
    if (fan2Ref.current) {
      fan2Ref.current.rotation.y += 0.01;  // 調整旋轉速度
    }

    if (fan3Ref.current) {
      fan3Ref.current.rotation.y += 0.01;  // 調整旋轉速度
    }
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group position={[-60, 80, 12]} rotation={[Math.PI/2, 0,Math.PI/2]}>
          <group position={[-0.367, 5.126, -23.982]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.displayport_3.geometry} material={materials['displayport:color:26:26:26']} />
            <mesh geometry={nodes.displayport_4.geometry} material={materials['displayport:color:165:158:150']} />
          </group>
          <group position={[-0.367, 5.126, -45.058]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.displayport_5.geometry} material={materials['displayport:color:26:26:26']} />
            <mesh geometry={nodes.displayport_6.geometry} material={materials['displayport:color:165:158:150']} />
          </group>
          <group position={[-1.067, 5.031, -66.021]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.hdmi_1.geometry} material={materials['hdmi:color:26:26:26']} />
            <mesh geometry={nodes.hdmi_2.geometry} material={materials['hdmi:color:165:158:150']} />
          </group>
          <group position={[-0.367, 5.126, -87.081]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.displayport_7.geometry} material={materials['displayport:color:26:26:26']} />
            <mesh geometry={nodes.displayport_8.geometry} material={materials['displayport:color:165:158:150']} />
          </group>
          <group position={[0, 5.626, -13]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.heatsink_1.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_2.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_3.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_4.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_5.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_6.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_7.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_8.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_9.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_10.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_11.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_12.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_13.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_14.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_15.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_16.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_17.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_18.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_19.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_20.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_21.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_22.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_23.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_24.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_25.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_26.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_27.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_28.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_29.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_30.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_31.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_32.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_33.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_34.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_35.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_36.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_37.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_38.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_39.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_40.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_41.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_42.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_43.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_44.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_45.geometry} material={materials['heatsink:color:202:209:238']} />
            <mesh geometry={nodes.heatsink_46.geometry} material={materials['heatsink:color:202:209:238']} />
          </group>
          <mesh geometry={nodes.hyte_dual_bracket_1.geometry} material={materials['hyte dual bracket:color:135:140:140']} position={[-2.067, -1.223, 15.49]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_6'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 10.337, -99.282]} rotation={[0.006, 0, 0]} />
          <mesh geometry={nodes['95mm_strix_fan_2'].geometry}         ref={fan2Ref}
 material={materials['95mm strix fan:color:26:26:26']} position={[54, 27.538, -72]} />
          <mesh geometry={nodes['95mm_Cooltech_Fan_1'].geometry}         ref={fan1Ref}
 material={materials['95mm Cooltech Fan:color:26:26:26']} position={[154, 27.538, -72]} rotation={[-Math.PI, 0.555, -Math.PI]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_7'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 13.142, -23.982]} rotation={[0.45, 0, 0]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_8'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 13.142, -87.081]} rotation={[0.293, 0, 0]} />
          <mesh geometry={nodes.PCIE_8_pin_8_2.geometry} material={materials['PCIE 8 pin_8:color:76:76:76']} position={[245.728, 6.426, -118.3]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.PCIE_8_pin_8_3.geometry} material={materials['PCIE 8 pin_8:color:76:76:76']} position={[265.728, 6.426, -118.3]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_9'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 25.14, -99.282]} rotation={[0.165, 0, 0]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_10'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 13.142, -66.021]} rotation={[0.386, 0, 0]} />
          <mesh geometry={nodes['3090_pcb_1'].geometry} material={materials['3090 pcb:color:26:26:26']} />
          <mesh geometry={nodes['3090_pcb_2'].geometry} material={materials['3090 pcb:color:202:209:238']} />
          <mesh geometry={nodes['3090_pcb_3'].geometry} material={materials['3090 pcb:color:127:127:127']} />
          <mesh geometry={nodes['95mm_strix_fan_3'].geometry} material={materials['95mm strix fan:color:26:26:26']} ref={fan3Ref} position={[254, 27.538, -72]} />
          <mesh geometry={nodes['pan_head_cross_recess_screw_din_DIN_EN_ISO_7045_-_M25_x_3_-_Z_-_3N_1'].geometry} material={materials['pan head cross recess screw_din_DIN EN ISO 7045 - M2.5 x 3 - Z - 3N:color:198:193:188']} position={[5.147, -3.323, -106.049]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes['countersunk_raised_head_cross_recess_screw_din_DIN_EN_ISO_7047_-_M3_x_4_-_Z_-_4N_11'].geometry} material={materials['countersunk raised head cross recess screw_din_DIN EN ISO 7047 - M3 x 4 - Z - 4N:color:198:193:188']} position={[-3.167, 13.142, -45.058]} rotation={[0.44, 0, 0]} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={812.275} near={485.55} fov={39.598} position={[-0.401, 0.188, 0.478]} rotation={[-0.336, -0.67, -0.214]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/video-card.glb')
