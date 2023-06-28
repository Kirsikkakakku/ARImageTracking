using System.Collections;
using System.Collections.Generic;
using UnityEngine;
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

        [SerializeField] private Text testText_1, testText_2, testText_3, testText_4;
        [SerializeField] private GameObject XROrigin;

        private void Awake()
        {
            trackerCamera= FindObjectOfType<ImageTrackerCamera>();
            trackedPoseDriver = FindObjectOfType<TrackedPoseDriver>();
            cam = FindObjectOfType<Camera>();
        }

        private void Start()
        {
            testText_2.text = trackedPoseDriver.deviceType.ToString();
        }

        private void Update()
        {
            testText_1.text = XROrigin.transform.position.ToString();
            testText_2.text = trackedPoseDriver.transform.position.ToString();
            //testText_3.text = 
            //testText_4.text = cam.isActiveAndEnabled.ToString();

            
        }

        /*void ParseData(string data)
        {
            string[] values = data.Split(new char[] { ',' });

            string id = values[0];
            if (!targets.ContainsKey(id))
                return;

            Vector3 forward;
            forward.x = float.Parse(values[4], System.Globalization.CultureInfo.InvariantCulture);
            forward.y = float.Parse(values[5], System.Globalization.CultureInfo.InvariantCulture);
            forward.z = float.Parse(values[6], System.Globalization.CultureInfo.InvariantCulture);

            Vector3 up;
            up.x = float.Parse(values[7], System.Globalization.CultureInfo.InvariantCulture);
            up.y = float.Parse(values[8], System.Globalization.CultureInfo.InvariantCulture);
            up.z = float.Parse(values[9], System.Globalization.CultureInfo.InvariantCulture);

            Vector3 right;
            right.x = float.Parse(values[10], System.Globalization.CultureInfo.InvariantCulture);
            right.y = float.Parse(values[11], System.Globalization.CultureInfo.InvariantCulture);
            right.z = float.Parse(values[12], System.Globalization.CultureInfo.InvariantCulture);

            var rot = Quaternion.LookRotation(forward, up);


            Vector3 pos;
            pos.x = float.Parse(values[1], System.Globalization.CultureInfo.InvariantCulture);
            pos.y = float.Parse(values[2], System.Globalization.CultureInfo.InvariantCulture);
            pos.z = float.Parse(values[3], System.Globalization.CultureInfo.InvariantCulture);

            var target = targets[id].transform;

            if (imageTracker.trackerOrigin == TrackerOrigin.CAMERA_ORIGIN)
            {
                target.position = pos;
                target.rotation = rot;
            }

            else if (trackerOrigin == TrackerOrigin.FIRST_TARGET_ORIGIN)
            {
                if (trackedIds[0] == id)
                {
                    //first target in origin
                    target.position = Vector3.zero;
                    target.rotation = Quaternion.identity;

                    trackerCam.transform.position = Quaternion.Inverse(rot) * -pos;
                    trackerCam.transform.rotation = Quaternion.Inverse(rot);
                }
                else
                {
                    //succeeding targets relative to camera
                    target.position = trackerCam.transform.TransformPoint(pos);
                    target.rotation = trackerCam.transform.rotation * rot;
                }


            }

        }*/
    }
}
