export function contact(){
    content.innerHTML=` <div class="contact-content">
                <div class="contact-card">
                    <div class="contact-info">
                        <h1>We Would Love To Hear From You!</h1>
                        <p>Contact us if you have any questions regarding:</p>
                        <ul>
                            <li>Available wholesale products and price list for your cafe / business</li>
                            <li>Corporate events and pastry boxes for your team or event</li>
                            <li>Dietary restrictions</li>
                            <li>Past seasonal items availability</li>
                        </ul>
    
                        <p><strong>Pick up location:</strong><br>9247 Shaugnessy St. Vancouver, BC V6P 6R5</p>
                        <p><strong>Contact us at:</strong><br><a href="mailto:order@leavenlygoods.ca">Order@LeavenlyGoods.ca</a> | <a href="tel:6043791295">604 379 1295</a></p>
    
                    </div>
                </div>
                
                <div class="contact-form">
                    <form action="mailto:#">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Name">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email">
                        <label for="message">Message:</label>
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
               </div>`;
}