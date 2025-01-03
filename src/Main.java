//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.awt.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Main {
    public static void main(String[] args) {
        int screenX = 800, screenY = 600;


        JFrame canvas = new JFrame("Net.Connect");
        canvas.setPreferredSize(new Dimension(screenX, screenY));
        canvas.setLayout(new BorderLayout());  // BorderLayout for anchoring to top-left
        canvas.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        JPanel menu = new JPanel();
        menu.setLayout(new FlowLayout()); // Use FlowLayout (default) or another layout manager
        menu.setBackground(Color.LIGHT_GRAY); // Set background color
        menu.setPreferredSize(new Dimension(100,100)); // Optional: Only when using absolute positioning
        menu.setBorder(BorderFactory.createLineBorder(Color.BLACK)); // Add a border


        JButton addElem = new JButton("+");
        addElem.setFont(new Font("Serif", Font.BOLD, 60));
        addElem.setFocusable(false);
        addElem.setBackground(Color.LIGHT_GRAY); // Set button background color
        addElem.setBorderPainted(false);

        menu.add(addElem, BorderLayout.NORTH);
        canvas.add(menu,BorderLayout.WEST);



        /*
        JButton button = new JButton("+");

        // Customize the button appearance (e.g., make it bigger)
        button.setFont(new Font("Arial", Font.PLAIN, 30));  // Make the "+" sign larger

        button.setFocusPainted(false);  // Remove focus outline
        */
        // Set the layout manager for the frame






        canvas.pack();
        canvas.setVisible(true);
    }
}
