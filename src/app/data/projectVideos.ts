import cinematographyVideo from '../../../videos/automated-cinematography-video.mp4';
import baxterVideo         from '../../../videos/baxter_video.mp4';
import fuzzyTurtle1        from '../../../videos/fuzzy-turtle1.mp4';
import fuzzyTurtle2        from '../../../videos/fuzzy-turtle2.mp4';
import occlusionFill       from '../../../videos/occlusion-based-new_fill.mp4';
import occlusionOcb        from '../../../videos/occlusion-based-new_ocb.mp4';
import robotLearning       from '../../../videos/robot-learning_demo.mp4';

export const projectVideos: Record<string, string[]> = {
  'uav-cinematography':     [cinematographyVideo],
  'baxter-kdl':             [baxterVideo],
  'fuzzy-logic-navigation': [fuzzyTurtle1, fuzzyTurtle2],
  'collective-transport':   [occlusionFill, occlusionOcb],
  'robot-learning-demo':    [robotLearning],
};