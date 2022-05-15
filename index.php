<?php include_once 'autoload.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php require 'inc\header.php'; ?>
    <title>myCGPA</title>
</head>

<body class="bg-dark">
    <div class="container">

        <!--NAVBAR-->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Fixed navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <!--Calculator-->
        <form action="" class="form" method="POST">
            <input type="text" name="cc1" id="cc1" placeholder="course code e.g CHM101">
            <input type="text" name="cu" id="cu" placeholder="course unit">
            <select name="grade" id="grade" placeholder="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
            <br />

            <input type="text" name="cc2" id="cc2" placeholder="course code e.g CHM101">
            <input type="text" name="cu" id="cu">
            <select name="grade" id="grade" placeholder="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
            <br />

            <input type="text" name="cc3" id="cc3" placeholder="course code e.g CHM101">
            <input type="text" name="cu" id="cu">
            <select name="grade" id="grade" placeholder="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select> <br />

            <input type="text" name="cc4" id="cc4" placeholder="course code e.g CHM101">
            <input type="text" name="cu" id="cu">
            <select name="grade" id="grade" placeholder="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select> <br />

            <input type="text" name="cc5" id="cc5" placeholder="course code e.g CHM101">
            <input type="text" name="cu" id="cu">
            <select name="grade" id="grade" placeholder="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select> <br />

        </form><br />

        <span id="result" class="text-white">Result goes here</span>

        <!--MAIN-->
        <?php
        $gpa1 = new gpa(79, 19);

        echo "GPA is: " . $gpa1->getGpa();
        ?>

    </div>


    <!--FOOTER-->
    <?php require 'inc\footer.php'; ?>
</body>

</html>