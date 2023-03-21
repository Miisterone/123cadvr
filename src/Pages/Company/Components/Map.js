export default function Map() {
    return (
        <div className="Map grid grid-cols-2 justify-center">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8235424549903!2d1.4210698512687852!3d43.6726395790181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea5937023240f%3A0x817c9f4013e14394!2s123cad!5e0!3m2!1sfr!2sfr!4v1679306713434!5m2!1sfr!2sfr"
                    width="800" height="600" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
            <div className="bg-red-600">

            </div>
        </div>
    )
}