import aerialCinematographyImg from '../../../images/projects/aerial-cinematography.png';
import aerialIntegrationImg from '../../../images/projects/automated-cinematography-integration.png';
import collectiveSwarmJpg from '../../../images/projects/collective-swarm.jpg';
import collectiveSwarmPng from '../../../images/projects/collective-swarm.png';
import detectionDlImg from '../../../images/projects/detection-dl.JPG';
import faceRecognitionImg from '../../../images/projects/face-recognition.png';
import facialKey1Img from '../../../images/projects/facial-key_1.png';
import facialKey2Img from '../../../images/projects/facial-key_2.png';
import fuzzyImg from '../../../images/projects/fuzzy.jpg';
import fuzzyOaflcImg from '../../../images/projects/fuzzy-OAFLC.png';
import fuzzyTlfcImg from '../../../images/projects/fuzzy-TLFC.jpg';
import kinematicsBaxterImg from '../../../images/projects/kinematics-baxter.jpg';
import robotLearningImg from '../../../images/projects/robot-learning-mocap.jpg';
import teleoperationImg from '../../../images/projects/teleoperation-imu.JPG';
import atlasImg from '../../../images/projects/atlas.png';
export { default as soonImg } from '../../../images/soon.png';

export const projectMainImage: Record<string, string> = {
  'uav-cinematography': aerialCinematographyImg,
  'collective-transport': collectiveSwarmJpg,
  'fuzzy-logic-navigation': fuzzyImg,
  'pose-estimation': detectionDlImg,
  'baxter-kdl': kinematicsBaxterImg,
  'facial-keypoints': facialKey1Img,
  'robot-learning-demo': robotLearningImg,
  'teleoperation-imu': teleoperationImg,
  'face-recognition': faceRecognitionImg,
  'atlas-escape': atlasImg,
};

export const projectImages: Record<string, string[]> = {
  'uav-cinematography': [aerialCinematographyImg, aerialIntegrationImg],
  'collective-transport': [collectiveSwarmJpg, collectiveSwarmPng],
  'fuzzy-logic-navigation': [fuzzyImg, fuzzyTlfcImg, fuzzyOaflcImg],
  'pose-estimation': [detectionDlImg],
  'baxter-kdl': [kinematicsBaxterImg],
  'facial-keypoints': [facialKey1Img, facialKey2Img],
  'robot-learning-demo': [robotLearningImg],
  'teleoperation-imu': [teleoperationImg],
  'face-recognition': [faceRecognitionImg],
  'atlas-escape': [atlasImg],
};