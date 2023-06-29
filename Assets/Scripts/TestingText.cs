using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SpatialTracking;
using UnityEngine.UI;
using static UnityEngine.GraphicsBuffer;

namespace Imagine.WebAR
{
    public class TestingText : MonoBehaviour
    {
        private ImageTrackerCamera trackerCamera;
        private TrackedPoseDriver trackedPoseDriver;
        private ImageTracker imageTracker;
        private Camera cam;
        private Vector3 basePos;
        private Quaternion baseRot;

        private bool motionTracking = false;

        [SerializeField] private Text testText_1, testText_2, testText_3, testText_4;
        [SerializeField] private GameObject TestObject;

        public static AttitudeSensor sensor { get; }

        private void Awake()
        {
            trackerCamera= FindObjectOfType<ImageTrackerCamera>();
            trackedPoseDriver = FindObjectOfType<TrackedPoseDriver>();
            cam = FindObjectOfType<Camera>();
            Input.gyro.enabled = true;
        }

        private void Start()
        {
            testText_2.text = trackedPoseDriver.deviceType.ToString();
        }

        private void Update()
        {
            //testText_1.text = Input.gyro.attitude.ToString();
            //testText_2.text = Input.acceleration.ToString();
            //testText_3.text = 
            //testText_4.text = cam.isActiveAndEnabled.ToString();

            if (motionTracking)
            {
                TestObject.transform.position = basePos + Input.acceleration;
                //TestObject.transform.rotation = baseRot + Input.gyro.attitude;
            }

        }

        public void StartMotionTracking()
        {
            motionTracking = true;
            baseRot = Input.gyro.attitude;
            basePos = Input.acceleration;
        }
    }
}
