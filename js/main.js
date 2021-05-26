$("#1").click(function () { play($("#1").attr('id')) })
$("#2").click(function () { play($("#2").attr('id')) })
$("#3").click(function () { play($("#3").attr('id')) })
$("#4").click(function () { play($("#4").attr('id')) })
$("#5").click(function () { play($("#5").attr('id')) })
$("#6").click(function () { play($("#6").attr('id')) })
$("#7").click(function () { play($("#7").attr('id')) })
$("#8").click(function () { play($("#8").attr('id')) })
$("#9").click(function () { play($("#9").attr('id')) })

showItems()
$(".win").hide()

var turn = true;
var Player1
var Player2
var winner

function names() {

    Player1 = $("#namePlayer1").val()
    Player2 = $("#namePlayer2").val()

    if (Player1 != "" && Player2 != "") {

        return true

    } else {
        return false
    }


}
function winCondition() {
    if ($("#1").text() == $("#4").text() && $("#1").text() == $("#7").text() && $("#1").text() != "") {

        colorcell(1, 4, 7)
        winMessage()
        addItem()

    } else
        if ($("#2").text() == $("#5").text() && $("#2").text() == $("#8").text() && $("#2").text() != "") {
            colorcell(2, 5, 8)
            winMessage()
            addItem()
        } else
            if ($("#3").text() == $("#6").text() && $("#3").text() == $("#9").text() && $("#3").text() != "") {
                colorcell(3, 6, 9)
                winMessage()
                addItem()
            } else
                if ($("#1").text() == $("#2").text() && $("#1").text() == $("#3").text() && $("#1").text() != "") {
                    colorcell(1, 2, 3)
                    winMessage()
                    addItem()
                } else
                    if ($("#4").text() == $("#5").text() && $("#4").text() == $("#6").text() && $("#4").text() != "") {
                        colorcell(4, 5, 6)
                        winMessage()
                        addItem()
                    } else
                        if ($("#7").text() == $("#8").text() && $("#7").text() == $("#9").text() && $("#7").text() != "") {
                            colorcell(7, 8, 9)
                            winMessage()
                            addItem()
                        } else
                            if ($("#1").text() == $("#5").text() && $("#1").text() == $("#9").text() && $("#1").text() != "") {
                                colorcell(1, 5, 9)
                                winMessage()
                                addItem()
                            } else
                                if ($("#7").text() == $("#5").text() && $("#7").text() == $("#3").text() && $("#7").text() != "") {
                                    colorcell(7, 5, 3)
                                    winMessage()
                                    addItem()
                                }

                                else if ($("#1").text() != "" && $("#2").text() != "" && $("#3").text() != "" && $("#4").text() != "" && $("#5").text() != "" && $("#6").text() != "" && $("#7").text() != "" && $("#8").text() != "" && $("#9").text() != "") {
                                    $("#playerWin").text("draw !!")
                                    setTimeout(function () { $(".win").show() }, 100)
                                    localStorage.setItem("Result", Player1 + " Vs " + Player2 + " Draw !!");

                                }
}
function winMessage() {
    if (turn) {
        winner = Player2
        $("#playerWin").text(Player2 + " Win")
        setTimeout(function () { $(".win").show() }, 100)

    } else {
        winner = Player1
        $("#playerWin").text(Player1 + " Win")
        setTimeout(function () { $(".win").show() }, 100)
    }
}
function colorcell(id1, id2, id3) {
    $("#" + id1).css({ "color": "white" })
    $("#" + id2).css({ "color": "white" })
    $("#" + id3).css({ "color": "white" })
}
function colorCellAll() {
    $("#" + 1).css({ "color": "#545454" })
    $("#" + 2).css({ "color": "#545454" })
    $("#" + 3).css({ "color": "#545454" })
    $("#" + 4).css({ "color": "#545454" })
    $("#" + 5).css({ "color": "#545454" })
    $("#" + 6).css({ "color": "#545454" })
    $("#" + 7).css({ "color": "#545454" })
    $("#" + 8).css({ "color": "#545454" })
    $("#" + 9).css({ "color": "#545454" })
}
function play(id) {

    if (names()) {
        setOption = $("#" + id).text()

        if (turn && setOption == "") {

            $("#player").text(Player2 + " Turn ")
            $("#" + id).text("X")
            turn = false
        } else if (!turn && setOption == "") {
            $("#player").text(Player1 + " Turn")

            $("#" + id).text("O")
            turn = true
        }
        winCondition()
    } else {
        alert("Please Enter Players name");
    }
}
function addItem() {

    localStorage.setItem("Result", Player1 + " Vs " + Player2 + " and " + winner + " Win");

}
function showItems() {

    if (localStorage.length) {

        console.log(`Found Elements ${localStorage.length}`);


        for (let [key, value] of Object.entries(localStorage)) {

            $(".Records").append("<h1 >" + value + "</h1>")
        }

    } else {

        $(".Records").text(`Local Storage Is Empty`);

    }

}
$("button").click(function () {
    $(".cells").text("")
})
$("#restart").click(function () {

    location.reload();
})
$("#Continue").click(function () {
    $(".win").hide()
    $(".cells").text("")
    colorCellAll()
    showItems()
})
