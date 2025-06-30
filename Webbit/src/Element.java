import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Element extends JPanel {
    private int x = 0, y = 0;
    private Point initialClick; // To track the mouse position when clicked

    public Element() {
        setBackground(Color.LIGHT_GRAY);
        setBorder(BorderFactory.createLineBorder(Color.BLACK));
        setSize(200, 100); // Set a fixed size for the element
        setLayout(null);
        setLocation(200, 200); // Initial position within the parent panel

        // Mouse listener to move the element
        addMouseListener(new MouseAdapter() {
            public void mousePressed(MouseEvent e) {
                initialClick = e.getPoint(); // Store the position where the mouse is pressed
            }
        });

        // Mouse motion listener to drag the element
        addMouseMotionListener(new MouseAdapter() {
            public void mouseDragged(MouseEvent e) {
                int deltaX = e.getX() - initialClick.x; // Calculate horizontal distance moved
                int deltaY = e.getY() - initialClick.y; // Calculate vertical distance moved
                int newX = getX() + deltaX; // Update new x position
                int newY = getY() + deltaY; // Update new y position
                setLocation(newX, newY); // Move the element to the new position
            }
        });
    }

}
