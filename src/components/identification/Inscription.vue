<template>
<section class="inscription">
    <div class="inscriptionLeft">
        <header>
            <div class="inscriptionLogo">Logo </div>
            <div>Sign up </div>
        </header>
        <div class="insMain">
            <form class = "insMainSection" @submit="submiting" action="#">
                <div class="insLogWith">
                    <div>
                        <div class="insOrangeBut"><img src="./image/google.svg">Log in with google</div>
                    </div>
                    <div class="insButtom1">
                        <div class="insOrangeBut"><img src="./image/facebook.svg">Log in with Facebook</div>
                    </div>
                </div>
                <div class="insLineOr">
                    <div></div><span>Or</span><div></div>
                </div>
                <div class ="insInput">
                    <InputI0 placeholder="Enter your Surname" name="Name" ref="surname" type = "text" pattern="^[a-zA-Z ]{4,22}$"/>
                </div>
                <div class ="insInput">
                    <InputI0 placeholder="Enter name" ref="name" type = "text" pattern="^[a-zA-Z ]{4,22}$"/>
                </div>
                <div class ="insInput">
                    <InputI0 placeholder="Enter your password" ref="password" type = "password" pattern="^.{4,22}$" />
                </div>
                <div class ="insInput">
                    <InputI0 placeholder="Confirm password" ref="confirmpw" type = "password" pattern="^.{4,22}$" />
                </div>
                <div class = "insSetting">
                    <div>
                        <input type="checkbox"> Keep logged in
                     </div>
                    <div class="insButtom1">
                        Forgot password
                    </div>
                </div>
                <div @click='toNext' class="insButtonI0" >SIgn up</div>
            </form>
        </div>
    </div>
    <div class="inscriptionRight">
    </div>
</section>
</template>
<style src="./inscription.css">
</style>
<script src = "./inscription.js">
</script>
