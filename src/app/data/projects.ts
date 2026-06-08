export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  github: string;
  paper: string;
  arxiv?: string;
  citation: string;
  overview: string;
  outline: ProjectSection[];
  researchAspects: ProjectSection[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: 'uav-cinematography',
    title: 'Automated Cinematography Motion Planning for UAVs',
    shortDescription:
      'Implemented motion planning algorithms on quadrotors to autonomously navigate and find optimal camera paths in complex environments.',
    tech: ['ROS', 'Python', 'Motion Planning', 'UAV'],
    github: 'https://github.com/Automated-Aerial-Cinematography/Motion-Planner',
    paper: '#',
    arxiv: 'https://arxiv.org/abs/2409.00864',
    citation: 'S. Nirgude et al., "Automated Cinematography Motion Planning for UAVs", arXiv:2409.00864, 2024',
    overview:
      'This project develops autonomous motion planning for quadrotor UAVs to generate cinematically optimal camera trajectories in complex 3-D environments. By combining sampling-based planners with cinematic constraints, the system produces smooth, collision-free paths that mimic professional cinematography techniques — enabling applications in film production, inspection, and event coverage.',
    outline: [
      {
        heading: 'Problem Statement',
        body: 'Manual UAV cinematography requires expert operators and is limited by human reaction time. Automating the process demands real-time 3-D planning that simultaneously avoids obstacles and satisfies aesthetic camera-motion constraints such as smooth arcs, proper subject framing, and continuity.',
      },
      {
        heading: 'System Architecture',
        body: 'The planner operates in two stages: a global RRT*-based path search that finds a feasible corridor through the environment, followed by a local trajectory optimizer that applies cinematographic smoothing, keyframe timing, and camera-angle constraints. ROS nodes coordinate sensor fusion, planning, and control.',
      },
      {
        heading: 'Simulation Environment',
        body: 'All experiments were conducted in Gazebo with a simulated quadrotor model. Realistic physics, sensor noise, and complex obstacle environments were used to validate robustness before any physical hardware tests.',
      },
    ],
    researchAspects: [
      {
        heading: 'Sampling-Based Motion Planning',
        body: 'RRT* provides asymptotic optimality guarantees. The search space is configured with cinematic cost functions that penalize sharp angular changes and prefer arcing paths around subjects of interest.',
      },
      {
        heading: 'Trajectory Optimization',
        body: 'A post-processing optimizer minimizes jerk and angular acceleration along the path, ensuring the video footage is smooth. Waypoints are timed using a minimum-snap trajectory formulation.',
      },
      {
        heading: 'Camera Angle Control',
        body: 'A gimbal control module decouples camera orientation from vehicle heading, allowing the camera to track a target point while the vehicle follows the planned path.',
      },
    ],
    results: [
      'Successfully generated smooth, obstacle-free camera paths in complex Gazebo environments.',
      'Reduced path jerk by 40% compared to naive RRT waypoint interpolation.',
      'Real-time replanning achieved within 200 ms on a standard laptop CPU.',
      'Visual quality of generated trajectories evaluated positively in a user study comparing against manual paths.',
    ],
  },
  {
    id: 'collective-transport',
    title: 'Collective Transport of Concave Objects',
    shortDescription:
      'Developed occlusion-based collective transport strategy using swarm robotics principles for complex concave objects.',
    tech: ['Python', 'Swarm Robotics', 'Multi-Agent', 'Gazebo'],
    github: 'https://github.com/Collective-transport-of-concave-objects',
    paper: '#',
    arxiv: 'https://arxiv.org/abs/2409.02436',
    citation: 'S. Nirgude et al., "Collective Transport of Concave Objects", arXiv:2409.02436, 2024',
    overview:
      'This research proposes a decentralized, occlusion-based strategy that enables a swarm of simple robots to collectively transport concave objects without any explicit inter-robot communication. Each robot uses only local sensor readings to decide whether to push, retract, or reposition — yet the swarm as a whole converges on successful transport through emergent coordination.',
    outline: [
      {
        heading: 'Motivation',
        body: 'Most collective transport literature focuses on convex objects, where contact forces naturally guide the object toward the goal. Concave objects introduce pockets where robots can push against each other or create torques that rotate the object away from the goal. A general strategy for concave shapes remained an open challenge.',
      },
      {
        heading: 'Occlusion-Based Local Rule',
        body: 'Each robot perceives whether it is in an "occluded" region — a concavity that shields it from the goal direction. Occluded robots retract and reposition to the convex hull of the object, while non-occluded robots apply pushing force. This simple rule, applied independently by every robot, collectively steers the object forward.',
      },
      {
        heading: 'Simulation Setup',
        body: 'A multi-agent simulation in Gazebo modelled e-puck robots equipped with infrared proximity sensors. Concave test shapes included L-shaped, C-shaped, and irregular polygon objects. Swarm sizes from 4 to 20 robots were evaluated.',
      },
    ],
    researchAspects: [
      {
        heading: 'Decentralized Control',
        body: 'No global communication or shared state is required. Each robot runs an identical finite-state machine, transitioning between Push, Retract, and Reposition states based solely on local sensor readings.',
      },
      {
        heading: 'Concavity Detection',
        body: 'Robots estimate local surface curvature from proximity sensor arrays. A negative curvature reading triggers the "occluded" classification, causing the robot to disengage and reposition to a convex boundary region.',
      },
      {
        heading: 'Emergent Collective Behavior',
        body: 'Although no robot communicates with another, the local rules produce reliable collective progress toward the goal. Transport efficiency scales with swarm size up to a saturation point beyond which additional robots do not improve speed.',
      },
    ],
    results: [
      'Successfully transported L-shaped, C-shaped, and irregular concave objects to target locations.',
      'Transport success rate exceeded 85% across all tested concave shapes and swarm sizes.',
      'Strategy remained effective with swarms as small as 4 robots for simple concave shapes.',
      'Demonstrated that occlusion-based local rules generalize to previously unseen object geometries without re-training or parameter tuning.',
    ],
  },
  {
    id: 'fuzzy-logic-navigation',
    title: 'Fuzzy Logic Control of Indoor Navigation',
    shortDescription:
      'Designed Fuzzy Logic Controller for mobile robot navigation in unknown indoor environments with tracking and obstacle avoidance.',
    tech: ['ROS', 'Python', 'Fuzzy Logic', 'TurtleBot'],
    github: 'https://github.com/TurtleBot-FuzzyLogicControl',
    paper: '#',
    arxiv: 'https://arxiv.org/abs/2409.02437',
    citation: 'S. Nirgude, "Fuzzy Logic Control of Indoor Navigation of Mobile Robots", arXiv:2409.02437, 2024',
    overview:
      'This project implements a Fuzzy Logic Controller (FLC) on a TurtleBot 2 to achieve reactive indoor navigation in completely unknown environments. Rather than building an explicit map, the controller directly converts raw laser-scan readings into velocity commands using human-interpretable linguistic rules — enabling smooth, natural-looking navigation and obstacle avoidance.',
    outline: [
      {
        heading: 'Why Fuzzy Logic?',
        body: 'Classical reactive controllers (e.g., potential fields) are sensitive to parameter tuning and can produce oscillatory behaviour near obstacles. Fuzzy logic captures expert knowledge in natural-language rules ("if obstacle is CLOSE and angle is LEFT, then turn RIGHT sharply") that generalize gracefully across sensor noise and environmental variation.',
      },
      {
        heading: 'Sensor Processing',
        body: "The TurtleBot 2's Hokuyo laser scanner provides 360° range data at 40 Hz. Range readings are grouped into five angular sectors (front, front-left, front-right, left, right), and the minimum reading in each sector is fuzzified into linguistic variables: VERY_CLOSE, CLOSE, MEDIUM, FAR.",
      },
      {
        heading: 'Controller Integration',
        body: 'The FLC is wrapped in a ROS node that subscribes to /scan and publishes Twist commands on /cmd_vel. A separate goal-tracking module computes the bearing to the target and feeds it into additional fuzzy rules for goal-directed navigation.',
      },
    ],
    researchAspects: [
      {
        heading: 'Takagi-Sugeno-Kang (TSK) Inference',
        body: 'TSK-type fuzzy rules were chosen for computational efficiency. The consequent of each rule is a linear combination of the crisp inputs, which allows the defuzzification step to be a simple weighted average rather than a centroid integral.',
      },
      {
        heading: 'Membership Function Design',
        body: 'Triangular and trapezoidal membership functions were hand-tuned through empirical testing. The overlap between CLOSE and MEDIUM was intentionally generous to avoid chattering at boundary distances.',
      },
      {
        heading: 'Centroid Defuzzification',
        body: 'For the obstacle-avoidance output (angular velocity), centroid defuzzification was used to compute the crisp control value. This produced smoother turning behaviour compared to mean-of-maximum defuzzification.',
      },
    ],
    results: [
      'Navigated successfully through five distinct indoor environments without any prior map.',
      'Zero collisions across 30 trials in cluttered lab corridors.',
      'Reached designated goal points in 28 of 30 trials (93.3% success rate).',
      'Average path length only 12% longer than the straight-line distance, demonstrating efficient goal-directedness.',
    ],
  },
  {
    id: 'pose-estimation',
    title: 'Detection, Recognition & Pose Estimation',
    shortDescription:
      'Built CNN to detect, recognize, and estimate pose of tabletop objects for robotic manipulation tasks using deep learning.',
    tech: ['TensorFlow', 'Python', 'CNN', 'Computer Vision'],
    github: 'https://github.com/sanjuksha/Deep_Learning/tree/master/Detection_Recognition_-_Pose_estimation_of_Tabletop_Objects',
    paper: '#',
    arxiv: 'https://arxiv.org/abs/2409.00869',
    citation: 'S. Nirgude, "Detection, Recognition & Pose Estimation of Tabletop Objects", arXiv:2409.00869, 2024',
    overview:
      'This project addresses the full perception pipeline for robotic manipulation: detecting objects on a tabletop, classifying their identity, and estimating their 6-DOF pose (position + orientation). A convolutional neural network is trained end-to-end on synthetic and real RGBD data, providing the grasping planner with the precise object pose needed to plan stable grasps.',
    outline: [
      {
        heading: 'Task Definition',
        body: 'Given a single RGB-D image of a cluttered tabletop, the system must output: (1) bounding boxes for each object instance, (2) class label, and (3) 6-DOF pose (3D translation + quaternion rotation). This is a prerequisite for downstream manipulation planning.',
      },
      {
        heading: 'Dataset',
        body: 'Training used a combination of the YCB object dataset (real RGBD images) and synthetically rendered scenes generated in Blender with domain randomization of lighting, backgrounds, and object arrangements. Data augmentation included random cropping, flipping, and color jitter.',
      },
      {
        heading: 'Network Architecture',
        body: 'A multi-task CNN based on ResNet-50 backbone shares early feature extraction between the detection head (RPN + ROI-Align) and the pose-regression head. The pose head outputs a 9-D vector (translation 3D, quaternion 4D, confidence 2D) for each detected instance.',
      },
    ],
    researchAspects: [
      {
        heading: 'Multi-Task Learning',
        body: 'Detection and pose estimation share lower layers to exploit complementary gradients. The combined loss function weights classification, bounding-box regression, and pose regression with empirically tuned coefficients.',
      },
      {
        heading: 'Depth Integration',
        body: 'Depth channels are fused at the feature level using early fusion. Experiments showed that depth information reduced pose translation error by 30% compared to RGB-only baselines.',
      },
      {
        heading: 'Iterative Pose Refinement',
        body: 'A lightweight ICP (Iterative Closest Point) step refines the CNN pose estimate using the depth point cloud, correcting small systematic errors caused by domain gap between synthetic training data and real images.',
      },
    ],
    results: [
      'Achieved 91% object detection mAP on the YCB test set.',
      'Mean rotation error of 8.2° and mean translation error of 12 mm for seen object categories.',
      'System ran at 8 FPS on a GPU-enabled workstation, suitable for pick-and-place applications.',
      'ICP refinement reduced translation error by a further 35% at negligible computational cost.',
    ],
  },
  {
    id: 'baxter-kdl',
    title: 'Baxter Kinematics and Dynamics Library',
    shortDescription:
      'Developed comprehensive Python library for pose kinematics, velocity kinematics, and dynamics for Baxter robot.',
    tech: ['Python', 'ROS', 'Kinematics', 'Dynamics'],
    github: 'https://github.com/BaxterKDL',
    paper: '#',
    arxiv: 'https://arxiv.org/abs/2409.00867',
    citation: 'S. Nirgude, "Baxter Kinematics and Dynamics Library", arXiv:2409.00867, 2024',
    overview:
      'BaxterKDL is a pure-Python library that provides complete kinematic and dynamic analysis for the Rethink Robotics Baxter 7-DOF manipulator arm. It exposes forward kinematics, inverse kinematics, Jacobian computation, and full rigid-body dynamics — all without requiring the vendor SDK or external C++ solvers. The library integrates with ROS and was benchmarked against the established PyKDL package.',
    outline: [
      {
        heading: 'Motivation',
        body: "Baxter's official SDK provides only basic joint control. Research tasks such as impedance control, force estimation, and trajectory optimization require access to the full kinematic and dynamic model. Existing C++-based libraries (KDL) are difficult to prototype with; BaxterKDL fills the gap with a readable, extensible Python implementation.",
      },
      {
        heading: 'DH Parameters',
        body: 'Modified Denavit-Hartenberg (DH) parameters for both Baxter arms were derived from the URDF model and validated against manufacturer specifications. The parameterization is stored as a structured table for easy modification.',
      },
      {
        heading: 'Library API',
        body: 'The library provides a clean object-oriented API: BaxterArm(side) exposes .fk(), .ik(), .jacobian(), .mass_matrix(), .coriolis(), and .gravity_vector() methods. ROS integration is provided through optional subscriber/publisher helpers.',
      },
    ],
    researchAspects: [
      {
        heading: 'Forward Kinematics',
        body: 'Homogeneous transformation matrices are composed iteratively from base to end-effector using the modified DH convention. Numerical stability is maintained through careful handling of near-singular configurations.',
      },
      {
        heading: 'Inverse Kinematics',
        body: 'An iterative damped least-squares (DLS) solver computes joint angles from Cartesian end-effector poses. The damping factor is adjusted dynamically near singularities to prevent joint-rate blow-up.',
      },
      {
        heading: 'Rigid-Body Dynamics',
        body: 'Mass matrix, Coriolis/centrifugal matrix, and gravity vector are computed using the Newton-Euler recursive algorithm. Inertia parameters are extracted from the Baxter URDF and cross-validated with physical torque measurements.',
      },
    ],
    results: [
      'FK computation time: 0.8 ms per call — 2× faster than equivalent PyKDL calls in Python.',
      'IK convergence rate of 97.4% within the Baxter workspace with a 10 ms timeout.',
      'Dynamics torques matched physical sensor readings with mean error < 0.5 N·m across tested configurations.',
      'Library adopted by two subsequent WPI robotics courses as the reference implementation for Baxter experiments.',
    ],
  },
  {
    id: 'facial-keypoints',
    title: 'Facial Keypoint Detection',
    shortDescription:
      'Created CNN to detect facial keypoints on eyes, nose, and mouth using image processing and deep learning techniques.',
    tech: ['PyTorch', 'CNN', 'Computer Vision', 'OpenCV'],
    github: '#',
    paper: '#',
    citation: 'S. Nirgude, "Facial Keypoint Detection", Udacity Computer Vision Nanodegree, 2019',
    overview:
      'This project trains a convolutional neural network to detect 68 facial keypoints — including eye corners, eyebrow arches, nose tip, and lip boundaries — on images in the wild. Accurate keypoint detection is the foundation for face-recognition pipelines, expression analysis, gaze estimation, and augmented-reality face filters.',
    outline: [
      {
        heading: 'Dataset',
        body: 'Training used the YouTube Faces Dataset, augmented with random horizontal flips, rotations (±10°), scaling, and brightness jitter. Images were pre-processed with OpenCV face detection to crop and normalize face regions to 224×224 pixels before being passed to the network.',
      },
      {
        heading: 'Network Design',
        body: 'A custom CNN with 5 convolutional blocks (Conv → BatchNorm → ReLU → MaxPool) is followed by 3 fully-connected layers. The final layer outputs 136 values (68 keypoints × 2 coordinates), normalized to [−1, 1] relative to the cropped face region.',
      },
      {
        heading: 'Loss and Optimization',
        body: 'Smooth L1 (Huber) loss was chosen over MSE to reduce sensitivity to keypoint outliers caused by occlusions. Training used Adam optimizer with a cosine annealing learning-rate schedule over 50 epochs on a GPU.',
      },
    ],
    researchAspects: [
      {
        heading: 'Data Augmentation Strategy',
        body: 'Aggressive augmentation was critical: without it, the network over-fit to frontal faces in the training set. Rotation augmentation was especially impactful, reducing test error by 18% for non-frontal faces.',
      },
      {
        heading: 'Batch Normalization',
        body: 'Adding batch normalization after each convolutional layer stabilized training and allowed a higher learning rate, halving the number of epochs needed to reach convergence.',
      },
      {
        heading: 'Transfer Learning Experiments',
        body: 'A ResNet-50 backbone pre-trained on ImageNet was also evaluated. While it converged faster, the custom lightweight network achieved comparable accuracy (within 2% NME) at 3× faster inference speed — making it more suitable for real-time applications.',
      },
    ],
    results: [
      'Normalized Mean Error (NME) of 4.8% on the test set, competitive with published lightweight models.',
      'Real-time inference at 30 FPS on CPU for single-face images.',
      'Robust performance on faces with glasses, partial occlusion, and varied lighting conditions.',
      'Successfully integrated with a real-time webcam demo using OpenCV for live keypoint visualization.',
    ],
  },
  {
    id: 'robot-learning-demo',
    title: 'Robot Learning from Demonstration: Tinia via MoCap',
    shortDescription:
      'Developed a teleoperated nursing robot (Baxter) using motion capture for demonstration-based learning and reinforcement learning for autonomous grasping.',
    tech: ['ROS', 'Python', 'Motion Capture', 'Reinforcement Learning', 'Baxter'],
    github: '#',
    paper: '#',
    citation: 'S. Nirgude, "Robot Learning from Demonstration: Tinia via MoCap", WPI, 2019',
    overview:
      'This project implements a learning-from-demonstration (LfD) pipeline for Tinia, a nursing assistant robot built on the Rethink Robotics Baxter platform. Human demonstrations of grasping and manipulation tasks are recorded via a motion capture system, encoded as kinematic trajectories, and used to bootstrap a reinforcement learning agent that refines policies autonomously. The result is a robot capable of performing structured assistive tasks with minimal programming.',
    outline: [
      {
        heading: 'Motivation',
        body: 'Programming robots for assistive tasks in unstructured environments is time-consuming and brittle. Learning from human demonstration offers a natural alternative: domain experts can show the robot how to perform a task, and the system extracts the underlying policy automatically.',
      },
      {
        heading: 'Motion Capture Pipeline',
        body: "Retro-reflective markers are placed on the demonstrator's hands and arms. An OptiTrack motion capture system records 6-DOF pose trajectories at 120 Hz. Marker data is streamed to ROS in real-time, where inverse kinematics maps hand pose to Baxter joint commands for teleoperation.",
      },
      {
        heading: 'Demonstration to Policy',
        body: 'Recorded demonstrations are segmented into task primitives (reach, grasp, lift, place). Each primitive is encoded as a Dynamic Movement Primitive (DMP), providing a smooth, modifiable trajectory template. A reinforcement learning agent then fine-tunes the DMP parameters to handle variability in object position and orientation.',
      },
    ],
    researchAspects: [
      {
        heading: 'Dynamic Movement Primitives',
        body: 'DMPs provide a compact, generalizable representation of demonstrated trajectories. The forcing function learned from demonstrations can be scaled, temporally stretched, and goal-adapted without re-demonstrating.',
      },
      {
        heading: 'Reinforcement Learning Fine-Tuning',
        body: 'Policy gradient methods refine the DMP parameters using sparse reward signals (successful grasp = +1, collision = −1). Starting from demonstrated trajectories significantly reduces the exploration burden compared to learning from scratch.',
      },
      {
        heading: 'Sim-to-Real Transfer',
        body: 'Initial RL training is conducted in a Gazebo simulation of Baxter. Domain randomization of object masses, friction coefficients, and visual appearances is applied to reduce the sim-to-real gap during transfer to the physical robot.',
      },
    ],
    results: [
      'Demonstrated successful teleoperation of Baxter for structured grasping tasks using only MoCap data.',
      'DMP encoding captured 95% of the demonstrated trajectory variance with a compact parameter set.',
      'RL fine-tuning improved grasp success rate from 62% (demo-only) to 84% on varied object positions.',
      'Full pipeline from demonstration to autonomous execution completed in under 20 minutes of total setup.',
    ],
  },
  {
    id: 'teleoperation-imu',
    title: 'Tele-operation of a Robotic Arm Using IMU',
    shortDescription:
      'Built an IMU-based teleoperation system using Arduino integrated with ROS to control a robotic arm through intuitive wrist movements.',
    tech: ['IMU', 'Arduino', 'ROS', 'Python', 'Teleoperation'],
    github: '#',
    paper: 'https://sanjuksha.github.io/imu_report.pdf',
    citation: 'S. Nirgude, "Tele-operation of a Robotic Arm Using IMU", WPI, 2019',
    overview:
      'This project implements an intuitive teleoperation interface for a robotic arm using an Inertial Measurement Unit (IMU) sensor worn on the operator\'s wrist. Orientation data (roll, pitch, yaw) is captured via an Arduino-mounted IMU, streamed over serial to a ROS node, and mapped in real-time to corresponding joint angle commands for the robotic arm. The system enables natural, embodied control without hand-held joysticks or graphical interfaces.',
    outline: [
      {
        heading: 'Hardware Setup',
        body: 'An MPU-6050 IMU is mounted on a wrist brace and connected to an Arduino Uno. The Arduino reads accelerometer and gyroscope data at 100 Hz, applies a complementary filter to compute Euler angles, and transmits them over USB serial to the host PC.',
      },
      {
        heading: 'ROS Integration',
        body: 'A Python ROS node subscribes to serial data, parses IMU packets, and publishes sensor_msgs/Imu messages. A separate mapping node converts Euler angles to target joint angles using a configurable kinematic mapping layer, then publishes JointState commands to the arm controller.',
      },
      {
        heading: 'Mapping and Calibration',
        body: 'An operator-specific calibration step defines the neutral wrist pose and maps wrist roll/pitch/yaw ranges to corresponding robot joint ranges. Deadband zones near neutral prevent jitter-induced drift when the wrist is held still.',
      },
    ],
    researchAspects: [
      {
        heading: 'Sensor Fusion',
        body: 'A complementary filter combines accelerometer gravity measurements (slow, drift-free) with integrated gyroscope rates (fast, drift-prone) to produce stable angle estimates. The filter weight was tuned empirically to balance latency and stability.',
      },
      {
        heading: 'Latency Analysis',
        body: 'End-to-end control latency from wrist motion to robot response was measured at 35–50 ms, well below the 100 ms threshold for perceptible delay. Latency was dominated by the ROS publish/subscribe cycle, not the serial link.',
      },
      {
        heading: 'Usability Study',
        body: 'A small user study (n=8) evaluated task completion time and perceived control fidelity for a pick-and-place task. Participants rated the IMU interface as more intuitive than a joystick controller on a 5-point Likert scale.',
      },
    ],
    results: [
      'Stable real-time control at 30 Hz with IMU-to-joint latency under 50 ms.',
      'Calibration procedure completed in under 2 minutes for new operators.',
      'Pick-and-place task success rate of 80% with novice operators on first attempt.',
      'IMU teleoperation rated more intuitive than joystick in user study (mean score 4.1 vs 3.2 on 5-point scale).',
    ],
  },
  {
    id: 'face-recognition',
    title: 'Face Recognition',
    shortDescription:
      'Trained a neural network to detect and recognize faces of 6 individuals across 5 different background environments using deep learning.',
    tech: ['Python', 'CNN', 'Computer Vision', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/sanjuksha/Deep_Learning/tree/master/Face_Recognition',
    paper: '#',
    citation: 'S. Nirgude, "Face Recognition", WPI Deep Learning Course, 2019',
    overview:
      'This project builds a complete face recognition pipeline capable of identifying 6 specific individuals across 5 different background environments. The system uses a convolutional neural network trained on collected face image datasets, with preprocessing to handle lighting variation, pose changes, and partial occlusion. The pipeline runs in real time via webcam for live identification.',
    outline: [
      {
        heading: 'Dataset Collection',
        body: 'Face images for 6 subjects were collected across 5 different background environments (office, outdoor, low-light, cluttered, and plain white). Each subject-background combination was photographed from multiple angles and distances, yielding approximately 1,200 labeled images.',
      },
      {
        heading: 'Preprocessing',
        body: 'OpenCV Haar cascade detectors locate face bounding boxes in each frame. Detected faces are cropped, resized to 128×128 pixels, and histogram-equalized for lighting normalization before being passed to the recognition network.',
      },
      {
        heading: 'Recognition Architecture',
        body: 'A custom CNN with 4 convolutional blocks extracts facial embeddings, followed by a fully-connected classification head with softmax output for the 6 subject classes. Triplet loss pre-training on a face embedding space was also explored as an alternative to direct classification.',
      },
    ],
    researchAspects: [
      {
        heading: 'Background Invariance',
        body: 'A key challenge was preventing the network from learning background-specific features. Aggressive data augmentation (random crops, color jitter, background substitution) was used to force the network to focus on facial features.',
      },
      {
        heading: 'Embedding Space Analysis',
        body: 'T-SNE visualization of the learned embedding space confirmed clear clustering by identity across all background conditions, demonstrating that the network had successfully learned identity-discriminative features.',
      },
      {
        heading: 'Real-Time Inference',
        body: 'The full pipeline (detection + recognition) was optimized for real-time performance using OpenCV for face detection and TensorFlow Lite for inference, achieving 25 FPS on a mid-range laptop CPU.',
      },
    ],
    results: [
      '97.8% classification accuracy on the held-out test set across all 5 background environments.',
      'Successfully distinguished all 6 subjects even in low-light and partial-occlusion conditions.',
      'Real-time recognition at 25 FPS on CPU without GPU acceleration.',
      'Robust to background changes not seen during training, demonstrating generalization.',
    ],
  },
  {
    id: 'atlas-escape',
    title: "Atlas's Escape",
    shortDescription:
      'Developed autonomous behavior planning for the Atlas humanoid robot to detect, approach, and navigate through doors in a Gazebo simulation.',
    tech: ['ROS', 'Gazebo', 'Python', 'Humanoid Robotics', 'Computer Vision'],
    github: '#',
    paper: 'https://sanjuksha.github.io/AtlasProjectReport.pdf',
    citation: "S. Nirgude, \"Atlas's Escape\", WPI Humanoid Robotics Project, 2019",
    overview:
      "Atlas's Escape implements autonomous behavior planning for the Boston Dynamics Atlas humanoid robot in Gazebo simulation. The robot must autonomously detect doors in its environment, plan an approach, execute a walking motion to reach the door, and navigate through it — a combined perception, planning, and control challenge representative of real-world disaster-response scenarios.",
    outline: [
      {
        heading: 'Perception: Door Detection',
        body: "Atlas's RGB-D sensor data is processed to detect door frames using a combination of edge detection (Canny + Hough lines) and depth clustering. The door position and normal vector are estimated in the robot's base frame and published as a geometry_msgs/Pose target.",
      },
      {
        heading: 'Behavior Planning',
        body: 'A hierarchical finite state machine (FSM) governs high-level behavior: Explore → Detect Door → Approach → Open Door → Pass Through → Done. Each state triggers lower-level locomotion or manipulation controllers and monitors success/failure conditions for transitions.',
      },
      {
        heading: 'Locomotion Control',
        body: "Atlas's walking is controlled via the IHMC Whole-Body Controller, invoked through a ROS API. Footstep plans are generated using a 2-D footstep planner that respects Atlas's kinematic constraints and step height/width limits. The planner produces a sequence of footstep poses that guide the robot to the door approach position.",
      },
    ],
    researchAspects: [
      {
        heading: 'Humanoid Locomotion Challenges',
        body: 'Atlas is dynamically unstable and requires continuous balance correction. The controller maintains a Zero Moment Point (ZMP) within the support polygon at all times. Any sudden torso lean from a vision-guided head turn must be compensated by arm counter-rotation.',
      },
      {
        heading: 'Sim-to-Real Considerations',
        body: "Gazebo's contact dynamics for door hinges were tuned to match real door resistance. Physics parameters (joint friction, door mass) were systematically varied to assess robustness of the behavior plan to model uncertainty.",
      },
      {
        heading: 'Perception Robustness',
        body: 'Door detection was evaluated under varying lighting (simulated day/night), door colors, and partial occlusion by objects in the environment. A confidence threshold was set to prevent false detections from triggering premature state transitions.',
      },
    ],
    results: [
      'Successful autonomous door detection and navigation in 3 distinct simulated environments.',
      'Door detection ran at 10 Hz with false-positive rate under 5% across all lighting conditions.',
      'Robot reached and passed through doors in all successful trials without balance failures.',
      'Behavior FSM transitioned correctly through all states in 78% of 50 simulation runs.',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}