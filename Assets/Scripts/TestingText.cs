using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SpatialTracking;
using UnityEngine.UI;

namespace Imagine.WebAR
{
    public class TestingText : MonoBehaviour
    {
        private ImageTrackerCamera trackerCamera;
        private TrackedPoseDriver trackedPoseDriver;
        private Camera cam;

        [SerializeField] private Text testText_1, testText_2, testText_3, testText_4;

        private void Awake()
        {
            trackerCamera= FindObjectOfType<ImageTrackerCamera>();
            trackedPoseDriver = FindObjectOfType<TrackedPoseDriver>();
            cam = FindObjectOfType<Camera>();
        }

        private void Start()
        {
            //testText_2.text = trackedPoseDriver.deviceType.ToString();
        }

        private void Update()
        {
            testText_1.text = trackerCamera.transform.position.ToString();
            //testText_3.text = trackedPoseDriver.transform.position.ToString();
            //testText_4.text = trackedPoseDriver.transform.rotation.ToString();
            testText_2.text = cam.isActiveAndEnabled.ToString();
        }
    }
}
