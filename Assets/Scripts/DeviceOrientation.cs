using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.InputSystem;

public class DeviceOrientation : MonoBehaviour
{
    [SerializeField] Text orientationText, gyroAvailability;

    public static AttitudeSensor current { get; }

    private bool gyroAvailable = false;

    void Start()
    {
        Input.gyro.enabled = true;
        gyroAvailable = SystemInfo.supportsGyroscope;
        gyroAvailability.text = gyroAvailable.ToString();
    }

    void Update()
    {
        if (current == null)
        {
            orientationText.text = "NULL";
        }
        orientationText.text = Input.gyro.attitude.ToString();
    }
}
