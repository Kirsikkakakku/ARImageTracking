using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.InputSystem;
using Imagine.WebAR;

public class DeviceOrientation : MonoBehaviour
{
    [SerializeField] Text topText, middleText, bottomText;
    [SerializeField] GameObject cam;
    [SerializeField] ImageTracker tracker;
    [SerializeField] ImageTrackerCamera trackerCam;


    public static AttitudeSensor current { get; }

    private bool gyroAvailable = false;

    void Start()
    {
        Input.gyro.enabled = true;
        gyroAvailable = SystemInfo.supportsGyroscope;
        middleText.text = gyroAvailable.ToString();
    }

    void Update()
    {
        if (current == null)
        {
            topText.text = "NULL";
        }
        //orientationText.text = Input.gyro.attitude.ToString();
        topText.text = cam.transform.position.ToString();
        middleText.text = tracker.isActiveAndEnabled.ToString();
        bottomText.text = trackerCam.isActiveAndEnabled.ToString();
    }
}
