package test.com;

import java.util.ArrayList;

public class TestMain {

	public static void main(String[] args) {
		
		ArrayList<Integer> list = new ArrayList<>();
		
		
		
		for (int i = 0; i < 3; i++) {
			list.add(1000+i);
		}
		
		list.remove(2);
		
		list.set(1, 2222);
		
		
	}

}
