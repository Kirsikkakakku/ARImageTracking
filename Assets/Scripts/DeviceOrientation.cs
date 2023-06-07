using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DeviceOrientation : MonoBehaviour
{
    [SerializeField] Text orientationText;

    void Update()
    {
        orientationText.text = Input.gyro.attitude.ToString();
    }
}
