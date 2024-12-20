import staff from './img/crew.webp';
export function about() {
    content.innerHTML = ` <div class="about-content">
                <div class="about">
                    <img src="https://leavenlygoods.ca/wp-content/uploads/2023/03/Le-Cordon-Bleu-225x300.jpeg" alt="">
                    <h2>LIVE, LAUGH, BAKE!</h2>
                    <hr>
                    <p> Welcome to Leavenly Goods Bakery! I’m Racel, the founder and head baker. Baking has been my
                        passion for years, and I’ve honed my skills working at a small bakery where I learned the
                        art of crafting beautiful and delicious baked goods. Over time, I began to experiment with
                        my own unique creations and shared them with family and friends, who encouraged me to start
                        my own bakery.
                        <br><br>
                        With their support, I left my full-time job and poured my heart and soul into creating
                        Leavenly Goods Bakery, a place where we take pride in every creation we make. Our bakery
                        offers a delightful mix of viennoiseries and classic Filipino baked goods, each made with
                        the utmost care and attention to detail. Our goal is to share our culture and love of baking
                        with our customers, providing them with a memorable and delicious experience with every
                        bite.
                        <br><br>
                        Whether you’re in the mood for a buttery croissant or sweet and fluffy Spanish Bread, we
                        have something for everyone at Leavenly Goods Bakery. Preorder and taste the love that goes
                        into every creation we make.
                    </p>
                </div>
                <div class="cater">
                    <div class="cater-info">
                        <h2>NEED CATERING?</h2>
                        <hr>
                        <p>Our team takes pride in our baked goods, using only the freshest ingredients and traditional
                            baking methods to ensure quality and deliciousness. Whether you’re looking for sweet treats
                            like
                            tarts, muffins, and cookies or savory options like cheese croissants and buns, we have
                            something
                            for everyone.
                            <br><br>
                            We also offer wholesale pricing for businesses looking to stock their shelves with our tasty
                            treats.
                            <br><br>
                            So whether you’re celebrating a special occasion, treating your team to a delicious snack,
                            or
                            stocking your business with fresh baked goods, Leavenly Goods has got you covered.
                            <br><br>
                            Contact us today at <a href="mailto:order@leavenlygoods.ca">@leavenlygoods.ca</a> to place
                            your order or to inquire about our catering
                            and wholesale options.
                        </p>
                    </div>
                       <img src="" alt="Staff Photo" id="staff-photo">
                </div>
                 <div class="info">
                    <h2>LOCALLY SOURCED INGREDIENTS.</h2>
                    <hr>
                    <p>We are committed to using only the best ingredients.
                        <br><br>Some of the Canadian businesses we workwith include:
                    </p>
                    <ul>
                        <li>Susgrainable Health Foods</li>
                        <li>NutJar (premium nut butter, paste and snacks)</li>
                        <li>Origo Foods Inc.</li>
                        <li>Windsor Meats</li>
                        <li>GroundUp – Eco Ventures</li>
                    </ul>

                    <p>We are excited to work with more local companies as we continue to grow and expand our bakery
                        offerings. Reach out to us if you are a local company that wants to collaborate.
                        <br><br>
                        Find our frozen raw bake-at-home products at the following online grocery stores and Specialty
                        Stores:
                    </p>
                    <ul>
                        <li>Shop Bcause – <a href=" https://shopbcause.ca/">shopbcause.ca</a></li>
                        <li>Eden West Gourmet – <a href="https://edenwestgourmet.ca">edenwestgourmet.ca</a></li>
                        <li>Windsor Meats – Caulfeild</li>
                        <li>Windsor Meats – Edgemont</li>
                        <li>Windsor Meats – Hastings</li>
                        <li>Windsor Meats – Mackenzie</li>
                        <li>Windsor Meats – Steveston</li>
                    </ul>          
                </div>
            </div>
        `;
        const aboutImg = document.querySelector("#staff-photo");
        aboutImg.src = staff;
}