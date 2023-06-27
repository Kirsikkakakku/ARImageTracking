using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Imagine.WebAR
{
    public class TestingText : MonoBehaviour
    {
        private ImageTrackerCamera trackerCamera;

        [SerializeField] private Text testText_1;

        private void Awake()
        {
            trackerCamera= FindObjectOfType<ImageTrackerCamera>();
        }

        private void Update()
        {
            testText_1.text = trackerCamera.paused.ToString();
        }
    }
}
