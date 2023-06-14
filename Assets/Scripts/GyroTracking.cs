using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

namespace Imagine.WebAR
{
    public class GyroTracking : MonoBehaviour
    {
        [SerializeField] GameObject testObject;

        public static AttitudeSensor sensor { get; }
        // Start is called before the first frame update
        void Start()
        {
            Input.gyro.enabled = true;
        }

        // Update is called once per frame
        void Update()
        {
            transform.rotation = Input.gyro.attitude;
        }
    }
}
