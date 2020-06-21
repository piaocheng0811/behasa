<!DOCTYPE html>
<html dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Belhasa</title>


    <link rel="shortcut icon" href="{{asset('images/symbol.png')}}"/>
    <link href="{{asset('css/material.css')}}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>

    <![endif]-->
    <style>
        #preloader {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            background: #6f9fe6;
        }

        .spinner {
            margin: auto;
            width: 70px;
            height: 70px;
            position: relative;
            top: 45%;
            text-align: center;
            -webkit-animation: sk-rotate 2.0s infinite linear;
            animation: sk-rotate 2.0s infinite linear;
        }

        .dot1,
        .dot2 {
            width: 60%;
            height: 60%;
            display: inline-block;
            position: absolute;
            top: 0;
            background-color: #fff;
            border-radius: 100%;
            -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
            animation: sk-bounce 2.0s infinite ease-in-out;
        }

        .dot2 {
            top: auto;
            bottom: 0;
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }

        @-webkit-keyframes sk-rotate {
            100% {
                -webkit-transform: rotate(360deg)
            }
        }

        @keyframes sk-rotate {
            100% {
                transform: rotate(360deg);
                -webkit-transform: rotate(360deg)
            }
        }

        @-webkit-keyframes sk-bounce {
            0%,
            100% {
                -webkit-transform: scale(0.0)
            }
            50% {
                -webkit-transform: scale(1.0)
            }
        }

        @keyframes sk-bounce {
            0%,
            100% {
                transform: scale(0.0);
                -webkit-transform: scale(0.0);
            }
            50% {
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }
        }
    </style>
    <script>
        window.onload = function () {
            document.querySelector('#preloader').remove()
        }
    </script>
</head>

<body>
    <div id="preloader">
        <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
        </div>
    </div>
    <div id="app"></div>
    <script type="text/javascript" src="{{ asset('manifest.js')}}"></script>
    <script type="text/javascript" src="{{ asset('vendor.js')}}"></script>
    <script type="text/javascript" src="{{ asset('main.js')}}"></script>
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/core/jquery.min.js"></script>
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/core/popper.min.js"></script>
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/core/bootstrap-material-design.min.js"></script>
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
    <!-- Plugin for the momentJs  -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/moment.min.js"></script>
    <!--  Plugin for Sweet Alert -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/sweetalert2.js"></script>
    <!-- Forms Validations Plugin -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jquery.validate.min.js"></script>
    <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jquery.bootstrap-wizard.js"></script>
    <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/bootstrap-selectpicker.js"></script>
    <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
    <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jquery.dataTables.min.js"></script>
    <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/bootstrap-tagsinput.js"></script>
    <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jasny-bootstrap.min.js"></script>
    <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/fullcalendar.min.js"></script>

    <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/nouislider.min.js"></script>
    <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
    <!-- Library for adding dinamically elements -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/arrive.min.js"></script>


    <!-- Place this tag in your head or just before your close body tag. -->
    <script async="" defer="" src="https://buttons.github.io/buttons.js"></script>
    <!-- Chartist JS -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/chartist.min.js"></script>
    <!--  Notifications Plugin    -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/bootstrap-notify.js"></script>
    <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/js/material-dashboard.min.js?v=2.1.2" type="text/javascript"></script>
    <!-- Material Dashboard DEMO methods, don't include it in your project! -->
    <script src="https://demos.creative-tim.com/material-dashboard-pro/assets/demo/demo.js"></script>
</body>

</html>
