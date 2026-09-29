const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

// create contact
const createContact = async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    const contact = new Contact({
      name,
      phone,
      email,
      subject,
      message,
    });

    const result = await contact.save();

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Enquiry",
     html: `
  <div style="
    margin: 0;
    padding: 40px 20px;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
  ">

    <div style="
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    ">

      <!-- Header -->
      <div style="
        background-color: #1f2937;
        padding: 30px;
        text-align: center;
      ">
        <h1 style="
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
        ">
          New Contact Enquiry
        </h1>

        <p style="
          margin: 8px 0 0;
          color: #d1d5db;
          font-size: 14px;
        ">
          You have received a new enquiry from your website
        </p>
      </div>


      <!-- Content -->
      <div style="padding: 30px;">

        <p style="
          margin: 0 0 20px;
          color: #374151;
          font-size: 16px;
        ">
          Hello Admin,
        </p>

        <p style="
          margin: 0 0 25px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
        ">
          A customer has submitted a new enquiry through the contact
          form. Here are the details:
        </p>


        <!-- Customer Details -->
        <div style="
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 25px;
        ">

          <div style="
            background-color: #f9fafb;
            padding: 15px 18px;
            border-bottom: 1px solid #e5e7eb;
          ">
            <h3 style="
              margin: 0;
              color: #111827;
              font-size: 16px;
            ">
              Customer Details
            </h3>
          </div>


          <div style="padding: 18px;">

            <div style="
              padding: 10px 0;
              border-bottom: 1px solid #f1f1f1;
            ">
              <span style="
                display: inline-block;
                width: 100px;
                color: #6b7280;
                font-size: 14px;
              ">
                Name
              </span>

              <strong style="
                color: #111827;
                font-size: 14px;
              ">
                ${name}
              </strong>
            </div>


            <div style="
              padding: 10px 0;
              border-bottom: 1px solid #f1f1f1;
            ">
              <span style="
                display: inline-block;
                width: 100px;
                color: #6b7280;
                font-size: 14px;
              ">
                Phone
              </span>

              <strong style="
                color: #111827;
                font-size: 14px;
              ">
                ${phone}
              </strong>
            </div>


            <div style="
              padding: 10px 0;
              border-bottom: 1px solid #f1f1f1;
            ">
              <span style="
                display: inline-block;
                width: 100px;
                color: #6b7280;
                font-size: 14px;
              ">
                Email
              </span>

              <strong style="
                color: #111827;
                font-size: 14px;
              ">
                ${email || "Not provided"}
              </strong>
            </div>


            <div style="
              padding: 10px 0;
            ">
              <span style="
                display: inline-block;
                width: 100px;
                color: #6b7280;
                font-size: 14px;
              ">
                Subject
              </span>

              <strong style="
                color: #111827;
                font-size: 14px;
              ">
                ${subject || "Not provided"}
              </strong>
            </div>

          </div>
        </div>


        <!-- Message -->
        <div style="margin-bottom: 25px;">

          <h3 style="
            margin: 0 0 10px;
            color: #111827;
            font-size: 16px;
          ">
            Customer Message
          </h3>

          <div style="
            padding: 18px;
            background-color: #f9fafb;
            border-left: 4px solid #1f2937;
            border-radius: 6px;
          ">
            <p style="
              margin: 0;
              color: #4b5563;
              font-size: 14px;
              line-height: 1.7;
            ">
              ${message}
            </p>
          </div>

        </div>


        <!-- Action -->
        <div style="
          padding: 18px;
          background-color: #fef3c7;
          border-radius: 8px;
          text-align: center;
        ">
          <p style="
            margin: 0;
            color: #92400e;
            font-size: 14px;
          ">
            Please review this enquiry and contact the customer
            if required.
          </p>
        </div>

      </div>


      <!-- Footer -->
      <div style="
        padding: 20px 30px;
        background-color: #f9fafb;
        border-top: 1px solid #e5e7eb;
        text-align: center;
      ">

        <p style="
          margin: 0;
          color: #6b7280;
          font-size: 12px;
        ">
          This email was automatically generated from your
          furniture business website.
        </p>

        <p style="
          margin: 8px 0 0;
          color: #9ca3af;
          font-size: 12px;
        ">
          © ${new Date().getFullYear()} Furniture Business
        </p>

      </div>

    </div>

  </div>
`,
    });

    if (email) {
      await sendEmail({
        to: email,
        subject: "Thank You for Contacting Us",
        html: `
  <div style="
    margin: 0;
    padding: 40px 20px;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
  ">

    <div style="
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    ">

      <!-- Header -->
      <div style="
        background-color: #1f2937;
        padding: 35px 30px;
        text-align: center;
      ">

        <div style="
          width: 55px;
          height: 55px;
          margin: 0 auto 15px;
          background-color: #ffffff;
          border-radius: 50%;
          line-height: 55px;
          font-size: 28px;
        ">
          ✓
        </div>

        <h1 style="
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
        ">
          Thank You, ${name}!
        </h1>

        <p style="
          margin: 8px 0 0;
          color: #d1d5db;
          font-size: 14px;
        ">
          Your enquiry has been received successfully
        </p>

      </div>


      <!-- Content -->
      <div style="padding: 30px;">

        <p style="
          margin: 0 0 18px;
          color: #374151;
          font-size: 16px;
        ">
          Hello ${name},
        </p>

        <p style="
          margin: 0 0 15px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
        ">
          Thank you for reaching out to us. We have successfully
          received your enquiry and our team will review your
          message shortly.
        </p>

        <p style="
          margin: 0 0 25px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
        ">
          We will get back to you as soon as possible.
        </p>


        <!-- Enquiry Summary -->
        <div style="
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 25px;
        ">

          <div style="
            background-color: #f9fafb;
            padding: 15px 18px;
            border-bottom: 1px solid #e5e7eb;
          ">

            <h3 style="
              margin: 0;
              color: #111827;
              font-size: 16px;
            ">
              Your Enquiry
            </h3>

          </div>


          <div style="padding: 18px;">

            <div style="
              padding: 10px 0;
              border-bottom: 1px solid #f1f1f1;
            ">

              <span style="
                display: inline-block;
                width: 90px;
                color: #6b7280;
                font-size: 14px;
              ">
                Subject
              </span>

              <strong style="
                color: #111827;
                font-size: 14px;
              ">
                ${subject || "General Enquiry"}
              </strong>

            </div>


            <div style="padding: 10px 0;">

              <span style="
                display: inline-block;
                width: 90px;
                color: #6b7280;
                font-size: 14px;
                vertical-align: top;
              ">
                Message
              </span>

              <span style="
                color: #4b5563;
                font-size: 14px;
                line-height: 1.6;
              ">
                ${message}
              </span>

            </div>

          </div>

        </div>


        <!-- Confirmation -->
        <div style="
          padding: 18px;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          margin-bottom: 25px;
        ">

          <p style="
            margin: 0;
            color: #166534;
            font-size: 14px;
            line-height: 1.6;
          ">
            ✓ Your enquiry has been successfully submitted.
            No further action is required from you at this time.
          </p>

        </div>


        <p style="
          margin: 0;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
        ">
          We appreciate your interest in our services and look
          forward to assisting you.
        </p>

      </div>


      <!-- Footer -->
      <div style="
        padding: 22px 30px;
        background-color: #f9fafb;
        border-top: 1px solid #e5e7eb;
        text-align: center;
      ">

        <p style="
          margin: 0;
          color: #374151;
          font-size: 14px;
          font-weight: 600;
        ">
          Furniture Business Team
        </p>

        <p style="
          margin: 7px 0 0;
          color: #9ca3af;
          font-size: 12px;
        ">
          Thank you for choosing us.
        </p>

        <p style="
          margin: 10px 0 0;
          color: #9ca3af;
          font-size: 11px;
        ">
          This is an automated confirmation email.
          Please do not reply directly to this message.
        </p>

        <p style="
          margin: 10px 0 0;
          color: #9ca3af;
          font-size: 11px;
        ">
          © ${new Date().getFullYear()} Furniture Business
        </p>

      </div>

    </div>

  </div>
`,
      });
    }

    res.status(201).json({
      message: "Contact Created Successfully",
      contact: result,
    });
  } catch (error) {
    console.log("Failed to Create the Contact:", error);

    res.status(500).json({
      message: "Failed to Create the Contact",
      error: error.message,
    });
  }
};

// get all contact
const getAllcontact = async (req, res) => {
  try {
    const contact = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Contact Fetched Successfully",
      contact: contact,
    });
  } catch (error) {
    console.log("Get Contact Error", error);

    res.status(500).json({
      message: "Faild to get the contact",
      error: error.message,
    });
  }
};

// update status
const updateContactStatus = async (req, res) => {
  try {
    const { status, adminNote } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status,
        adminNote,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact Not Found",
      });
    }

    res.status(200).json({
      message: "Contact Status Updated Successfully",
      contact,
    });
  } catch (error) {
    console.log("Failed to Update Contact Status:", error);

    res.status(500).json({
      message: "Failed to Update Contact Status",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getAllcontact,
  updateContactStatus,
};
